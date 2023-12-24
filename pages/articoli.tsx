import clientPromise from "../lib/mongodb";
export default function Articoli({ articoli }: any) {
  return (
    <div className="lista-articoli">
      {articoli.map((articolo: any) => (
        <div className="articolo" key={articolo._id}>
          <h2>{articolo.titolo}</h2>
          <h3>{articolo.introtext}</h3>
          <p>{articolo.fulltext}</p>
        </div>
      ))}
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
