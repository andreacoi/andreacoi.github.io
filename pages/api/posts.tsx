import { ottieniArticoli } from "../../lib/articolo";

export default async (req: any, res: any) => {
  try {
    let lista_articoli = ottieniArticoli();
    res.json(lista_articoli);
  } catch {}
};
