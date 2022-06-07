import Head from "next/head";

import Hero from "../components/Hero";
import Layout from "../components/Layout";
import TitleSeparator from "../components/TitleSeparator";
import Paquete from "../components/Paquete";
import { paquetes } from "../data/paquetes";

export default function Paquetes() {
  return (
    <>
      <Head>
        <title>Bigle | Paquetes</title>
        <meta name="description" content="Soluciones a la medida" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero
          title="Nuestros paquetes, creados para ti"
          text="Con estos paquetes tendrás el servicio que deseas implementado de la mejor manera posible por nuestros expertos"
        />
        <TitleSeparator
          title="Páginas web"
          text="Desde una landing page hasta un e-commerce, nosotros lo haremos."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3 sm:p-0">
          {paquetes
            .filter((card) => card.category === "web")
            .map((card) => (
              <Paquete
                key={card.id}
                category={card.category}
                title={card.title}
                slug={card.slug}
                image={card.image}
                description={card.description}
                minidescription={card.minidescription}
                caracteristicas={card.caracteristicas}
                showAs="card"
              />
            ))}
        </div>
        <TitleSeparator
          title="Redes sociales y publicidad"
          text="Manejamos las redes de tu negocio y las expandimos."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3 sm:p-0">
          {paquetes
            .filter((card) => card.category === "redes-sociales")
            .map((card) => (
              <Paquete
                key={card.id}
                category={card.category}
                title={card.title}
                slug={card.slug}
                image={card.image}
                description={card.description}
                minidescription={card.minidescription}
                caracteristicas={card.caracteristicas}
                showAs="card"
              />
            ))}
        </div>
      </Layout>
    </>
  );
}
