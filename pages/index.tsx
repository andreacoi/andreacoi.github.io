import styles from "../styles/Home.module.css";
import { singoloArticolo } from "../lib/articolo";
export default function Home({ postData }: any) {
  const dati_articolo = JSON.parse(postData);
  const titolo_articolo = dati_articolo[0].data.title;
  const categoria = dati_articolo[0].data.categoria;
  const data_pubblicazione = dati_articolo[0].data.pubblicazione;
  const tags = dati_articolo[0].data.tags;
  const contenuto = dati_articolo[1].value;
  console.log(dati_articolo);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Tech Blog</h1>
        <h2 className="titolo-articolo">{titolo_articolo}</h2>
        <h3 className="categoria">{categoria}</h3>
        <span className="data_pubblicazione">{data_pubblicazione}</span>
        <span className="tags">{tags}</span>
        <div dangerouslySetInnerHTML={{ __html: contenuto }} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getStaticProps({ params }: any) {
  // Add the "await" keyword like this:
  const postData = await singoloArticolo(1);
  // let list = Object.entries(postData).map([key, value]);
  //console.log(list);
  return {
    props: {
      postData,
    },
  };
}
