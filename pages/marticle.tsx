import { ottieniArticoli } from "../lib/articolo";

export default function Test(postData: any) {
  let articoli = postData;
  console.log(articoli);
  return 1;
}

export async function getStaticProps() {
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
