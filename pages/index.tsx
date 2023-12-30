import { ottieniArticoli } from "../lib/articolo";
import Image from "next/image";
import Link from "next/link";
export default function Home({ postData }: any) {
  const dati_articolo = JSON.parse(postData);
  return dati_articolo.map(function (articolo: any, key: any) {
    const alias: string = articolo[0].data.alias;
    const titolo: string = articolo[0].data.title;
    const excerpt: string = articolo[0].data.excerpt;
    const categoria: string = articolo[0].data.categoria;
    const pubblicazione: string = articolo[0].data.pubblicazione;
    const tags: string = articolo[0].data.tags.split(",");
    const primary_image: string = "/articles/thumbs/" + alias + ".jpg";
    const link_articolo: string = "/post/" + alias;
    return (
      <div
        id={alias}
        key={key}
        className="post max-w-6xl rounded overflow-hidden shadow-lg"
      >
        <Image
          src={primary_image}
          width={650}
          height={400}
          alt="Picture of the author"
          className="w-full"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">{titolo}</div>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Categoria: {categoria}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Pubblicato il: {pubblicazione}
          </span>
          <p className="text-gray-700 text-base mt-4 prose max-w-none prose-lg">
            {excerpt}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Keywords: {tags}
          </span>
        </div>
        <div className="px-6 pt-4 pb-8 text-center">
          <Link
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold mt-3 mb-2 py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            href={link_articolo}
          >
            Leggi tutto
          </Link>
        </div>
      </div>
    );
  });
}

export async function getStaticProps() {
  const postData = await ottieniArticoli();
  return {
    props: {
      postData,
    },
  };
}
