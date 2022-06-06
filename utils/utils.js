import { getPaquetes } from "./paquetesService";

export async function getPathsFromIds() {
  const paquetes = await getPaquetes();

  const ids = paquetes.map((paquete) => {
    return {
      params: { id: convertToPath(paquete.title) },
    };
  });
  return ids;
}

export async function getPaqueteData(id) {
  const paquetes = await getPaquetes();
  const paquete = paquetes.find(
    (paquete) => convertToPath(paquete.title) === id
  );
  return {
    id: id,
    data: paquete,
  };
}

export function convertToPath(title) {
  return title.toLowerCase().replace(/\s/g, "-");
}
