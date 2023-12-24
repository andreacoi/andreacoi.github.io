import Image from "next/image";
import styles from "../styles/Home.module.css";
import clientPromise from "../lib/mongodb";

export default function Home({ articoli }: any) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Tech Blog</h1>
        <div className="lista-articoli">
          {articoli.map((articolo: any) => (
            <div className="articolo" key={articolo._id}>
              <h2>{articolo.titolo}</h2>
              <h3>{articolo.introtext}</h3>
              <p>{articolo.fulltext}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("andreacoiblog");

    const articoli = await db
      .collection("articoli")
      .find({})
      .limit(1000)
      .toArray();

    return {
      props: { articoli: JSON.parse(JSON.stringify(articoli)) },
    };
  } catch (e) {
    console.error(e);
  }
}
