import fs from 'fs';
import path from 'path';
import { GPTWrapper } from '../../lib/GPTWrapper';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end("Only POST allowed");

  const { userId = "caide", plan = "core", userLog } = req.body;

  const deltaResult = await GPTWrapper({
    userId,
    plan,
    agent: 'StatEvaluator',
    input: userLog
  });

  if (deltaResult.error) return res.status(429).json({ error: deltaResult.error });

  let deltas;
  try {
    deltas = JSON.parse(deltaResult);
  } catch (err) {
    return res.status(500).json({ error: "GPT response could not be parsed", raw: deltaResult });
  }

  const statPath = path.join(process.cwd(), 'data', 'caide_stat_sheet.json');
  let statDataRaw = fs.readFileSync(statPath, 'utf8');
  let statData = JSON.parse(statDataRaw);

  const now = new Date().toISOString();

  const updated = statData.map(stat => {
    const delta = deltas[stat.id];
    if (typeof delta !== 'number') return stat;

    const newValue = Math.max(0, Math.min(100, stat.value + delta));
    const newXP = stat.xp + (delta * 10); // +10xp per delta point

    return {
      ...stat,
      value: newValue,
      xp: newXP,
      lastUpdated: now
    };
  });

  fs.writeFileSync(statPath, JSON.stringify(updated, null, 2));
  return res.json({ success: true, updatedStats: updated });
}
