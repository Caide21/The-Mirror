import ScrollContainer from "@/components/Containers/ScrollContainer";
import BlockRenderer from "@/components/BlockRenderer";

export default function ScrollPage({ title, blocks }) {
  return (
    <main className="min-h-screen bg-black flex justify-center items-start p-6 sm:p-12">
      <div className="w-full max-w-3xl mx-auto mt-20">
        <ScrollContainer>
          <h1 className="text-4xl font-bold mb-6">{title}</h1>
          <BlockRenderer blocks={blocks} />
        </ScrollContainer>
      </div>
    </main>
  );
}
