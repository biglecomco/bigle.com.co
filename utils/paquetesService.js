export async function getPaquetes() {
  const res = await fetch("http://localhost:3000/api/paquetes");
  const data = await res.json();
  return data;
}

export async function getPaquete(slug) {
  const res = await fetch(`http://localhost:3000/api/paquetes/${slug}`);
  const data = await res.json();
  return data;
}

export async function getPaquetesByCategory(category) {
  const res = await fetch(`http://localhost:3000/api/paquetes/${category}`);
  const data = await res.json();
  return data;
}
