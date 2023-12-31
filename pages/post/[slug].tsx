import { ottieniArticoli, singoloArticolo } from "../../lib/articolo";
import { GetStaticPaths } from "next";
import parse from "html-react-parser";
import Image from "next/image";

export default function Single({ postData }: any) {
  // Parse a JSON
  let articolo = JSON.parse(postData);

  const alias: string = articolo[0].data.alias;
  const id: number = articolo[0].data.id;
  const titolo: string = articolo[0].data.title;
  const excerpt: string = articolo[0].data.excerpt;
  const categoria: string = articolo[0].data.categoria;
  const pubblicazione: string = articolo[0].data.pubblicazione;
  const tags: string = articolo[0].data.tags.split(",");
  const contenuto = parse(articolo[1].value);
  const primary_image: string = "/articles/thumbs/" + alias + ".jpg";
  return (
    <div
      id={alias}
      key={id}
      className="post max-w-7xl rounded overflow-hidden shadow-lg"
    >
      <Image
        src={primary_image}
        width={650}
        height={400}
        alt="Picture of the author"
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-3xl mb-2">{titolo}</div>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Categoria: {categoria}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Pubblicato il: {pubblicazione}
        </span>
        <p className="text-gray-700 text-base mt-4 prose max-w-none prose-lg">
          {excerpt}
        </p>
        <hr className="px-1 py-3 mt-3" />
        <div className="text-gray-700 text-base prose max-w-none prose-lg">
          {contenuto}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tags}
        </span>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [
      { params: { slug: "01-nuovo-post" } },
      { params: { slug: "02-ciao" } },
    ],
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps({ params }: any) {
  const postData = await singoloArticolo(params.slug);
  return {
    props: {
      postData,
    },
  };
}
