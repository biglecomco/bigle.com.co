import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Hero from "../components/Hero";
import Layout from "../components/Layout";
import TitleSeparator from "../components/TitleSeparator";

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
          title="Página web"
          text="Desde una landing page hasta un e-commerce, nosotros lo haremos."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3 sm:p-0">
          <div className="card bg-primary shadow-xl">
            <Link href={`/posts/2`}>
              <a className="relative w-full h-48">
                <Image
                  src={require("/assets/images/logo-blanco.png")}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                  alt="logo"
                />
              </a>
            </Link>
            <div className="card-body text-base-100">
              <h3 className="text-2xl font-medium text-center">
                Paquete Website
              </h3>
              <p className="text-center my-3">Tu página web hecha realidad.</p>
              <div className="card-actions justify-center">
                <Link href={`/posts/2`}>
                  <a className="btn btn-secondary shadow-xl">Leer más</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="card bg-primary shadow-xl">
            <Link href={`/posts/2`}>
              <a className="relative w-full h-48">
                <Image
                  src={require("/assets/images/logo-blanco.png")}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                  alt="logo"
                />
              </a>
            </Link>
            <div className="card-body text-base-100">
              <h3 className="text-2xl font-medium text-center">
                Paquete Website avanzado
              </h3>
              <p className="text-center my-3">
                Tu página web más allá de lo simple.
              </p>
              <div className="card-actions justify-center">
                <Link href={`/posts/2`}>
                  <a className="btn btn-secondary shadow-xl">Leer más</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="card bg-primary shadow-xl">
            <Link href={`/posts/2`}>
              <a className="relative w-full h-48">
                <Image
                  src={require("/assets/images/logo-blanco.png")}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                  alt="logo"
                />
              </a>
            </Link>
            <div className="card-body text-base-100">
              <h3 className="text-2xl font-medium text-center">
                Paquete E-Commerce
              </h3>
              <p className="text-center my-3">
                Tu tienda en línea, lista para vender.
              </p>
              <div className="card-actions justify-center">
                <Link href={`/posts/2`}>
                  <a className="btn btn-secondary shadow-xl">Leer más</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
