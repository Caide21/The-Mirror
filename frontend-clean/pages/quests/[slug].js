import { fetchScrollPageBySlug } from "@/lib/notion";
import BlockRenderer from "@/components/Control_Components/BlockRenderer";

export default function QuestDetail({ page }) {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-4">{page.title}</h1>
      <p className="mb-4">
        {page.properties.Description?.rich_text?.[0]?.plain_text}
      </p>

      <BlockRenderer blocks={page.blocks} />
    </main>
  );
}

export async function getServerSideProps({ params }) {
  const page = await fetchScrollPageBySlug(params.slug);
  return { props: { page } };
}
