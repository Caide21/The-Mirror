// lib/GPTWrapper.js
import planConfig from '../data/planConfig.json';

let userUsage = {}; // Temporary in-memory tracker

export async function GPTWrapper({ userId, plan, agent, input }) {
  const limits = planConfig[plan];
  const usage = userUsage[userId]?.[agent] || 0;

  if (usage >= limits[agent]) {
    return { error: "Limit reached for this agent in your plan." };
  }

  const prompt = await import(`./agents/${agent}.js`).then(m => m.buildPrompt(input));
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300
    })
  });

  const json = await response.json();
  userUsage[userId] = {
    ...userUsage[userId],
    [agent]: usage + 1
  };

  return json.choices[0].message.content;
}
