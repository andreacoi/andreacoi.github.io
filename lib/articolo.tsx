import { remark } from "remark";
import html from "remark-html";
import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

const path_articoli = "./data/articoli/";

export async function singoloArticolo(id: number) {
  const fullpath = path.resolve(path.join(path_articoli + "01-hello-world.md"));
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
  const dir = require("node-dir");
  let file_list: any = [];
  dir.readFiles(
    path_articoli,
    function (err: any, content: any, next: any) {
      if (err) throw err;
      console.log("content:", content);
      next();
    },
    function (err: any, files: any) {
      if (err) throw err;
      file_list.push(files);
      console.log("finished reading files:", files);
    },
  );

  return file_list;
}
