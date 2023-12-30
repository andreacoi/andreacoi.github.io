import { remark } from "remark";
import html from "remark-html";
import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import { getAllFiles } from "get-all-files";

const path_articoli = "./data/articoli/";

export async function singoloArticolo(slug: string) {
  const fullpath = path.resolve(path.join(path_articoli + slug + ".md"));
  const filecontent = fs.readFileSync(fullpath, "utf-8");
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(filecontent);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  let dati_articolo = [matterResult, processedContent];
  let serial_dati = JSON.stringify(dati_articolo);
  return serial_dati;
}

export async function ottieniArticoli() {
  // Lazily iterate over filenames asynchronously
  let lista_articoli: Array<any> = [];
  for await (const filename of getAllFiles(path_articoli)) {
    const filecontent = fs.readFileSync(filename, "utf-8");
    const matterResult = matter(filecontent);
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    let dati_articolo = [matterResult, processedContent];
    lista_articoli.push(dati_articolo);
  }
  let serial_dati = JSON.stringify(lista_articoli);
  return serial_dati;
}
