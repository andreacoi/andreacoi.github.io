import { ottieniArticoli } from "../lib/articolo";
import parse from "html-react-parser";
export default function Home({ postData }: any) {
  const dati_articolo = JSON.parse(postData);
  return dati_articolo.map((articolo: Array<any>) => (
    <div key="{articolo[0].data.id}" className="post">
      <h2 className="titolo-articolo">{articolo[0].data.title}</h2>
      <h3 className="categoria">{articolo[0].data.categoria}</h3>
      <span className="data_pubblicazione">
        {articolo[0].data.pubblicazione}
      </span>
      <span className="tags">{articolo[0].data.tags}</span>
      <div className="content">{parse(articolo[1].value)}</div>
    </div>
  ));
}

export async function getStaticProps({ params }: any) {
  // Add the "await" keyword like this:
  const postData = await ottieniArticoli();
  // let list = Object.entries(postData).map([key, value]);
  //console.log(list);
  return {
    props: {
      postData,
    },
  };
}
