import { remark } from "remark";
import html from "remark-html";
import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

let path_articoli = "./data/articoli/";
export async function singoloArticolo(id: number) {
  const fullpath = path.resolve(path.join(path_articoli + "01-hello-world.md"));
  const filecontent = fs.readFileSync(fullpath, "utf-8");
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(filecontent);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  let dati_articolo = [matterResult, processedContent];
  let serial_dati = JSON.stringify(dati_articolo);
  return serial_dati;
}

export async function ottieniArticoli() {}
