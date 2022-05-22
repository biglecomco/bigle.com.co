import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Contactanos() {
  return (
    <>
      <Head>
        <title>Bigle | Contáctanos</title>
        <meta name="description" content="Soluciones a la medida" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero title="Contáctanos" text="Hagamos tu idea realidad" />
      </Layout>
    </>
  );
}
