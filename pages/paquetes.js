import Head from "next/head";

import Hero from "../components/Hero";
import Layout from "../components/Layout";
import TitleSeparator from "../components/TitleSeparator";
import Paquete from "../components/Paquete";
import { getPaquetes } from "../utils/paquetesService";

export default function Paquetes({ paquetes }) {
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
          title="Página web"
          text="Desde una landing page hasta un e-commerce, nosotros lo haremos."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3 sm:p-0">
          {paquetes &&
            paquetes.map((paquete) => (
              <Paquete key={paquete.id} paquete={paquete} showAs="card" />
            ))}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await getPaquetes();

  return {
    props: {
      paquetes: res,
    },
    revalidate: 60, // In seconds
  };
}
