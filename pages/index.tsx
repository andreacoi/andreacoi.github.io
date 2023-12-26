import styles from "../styles/Home.module.css";
import { singoloArticolo } from "../lib/articolo";
export default function Home({ postData }: any) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Tech Blog</h1>
      </main>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
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
