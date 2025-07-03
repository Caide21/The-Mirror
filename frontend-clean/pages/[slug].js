import { fetchCodexPageBySlug } from "@/lib/notion";
import CodexSlugPage from "@/components/CodexSlugPage";

export default function Slug({ page }) {
  return <CodexSlugPage page={page} />;
}

export async function getServerSideProps({ params }) {
  const page = await fetchCodexPageBySlug(decodeURIComponent(params.slug));
  return { props: { page } };
}
