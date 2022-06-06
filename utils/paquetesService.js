export async function getPaquetes() {
  const res = await fetch("https://bigle-com-co.vercel.app/api/paquetes");
  const data = await res.json();
  return data;
}

export async function getPaquete(slug) {
  const res = await fetch(
    `https://bigle-com-co.vercel.app/api/paquetes/${slug}`
  );
  const data = await res.json();
  return data;
}

export async function getPaquetesByCategory(category) {
  const res = await fetch(
    `https://bigle-com-co.vercel.app/api/paquetes/${category}`
  );
  const data = await res.json();
  return data;
}
