import clientPromise from "../lib/mongodb";
export default function Articoli({ articoli }) {
  return (
    <ul>
      {articoli.map((articolo) => (
        <li>
          <h2>{articolo.titolo}</h2>
          <h3>{articolo.introtext}</h3>
          <p>{articolo.fulltext}</p>
        </li>
      ))}
    </ul>
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
