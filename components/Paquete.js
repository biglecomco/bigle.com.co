import Link from "next/link";
import Image from "next/image";

import Hero from "./Hero";
import TitleSeparator from "./TitleSeparator";
import { convertToPath } from "../utils/utils";
import Head from "next/head";

export default function Paquete({ paquete, showAs }) {
  if (showAs === "page") {
    return (
      <>
        <Head>
          <title>Bigle | {paquete.title}</title>
          <meta name="description" content="Soluciones a la medida" />
        </Head>
        <Hero title={paquete.title} />
        <TitleSeparator title={paquete.minidescription} />
        <div className="grid grid-cols-2 gap-6">
          <div className="py-20 px-10 text-xl shadow-xl rounded-xl">
            <p>{paquete.description}</p>
          </div>
        </div>
      </>
    );
  }
  if (showAs === "list") {
    return <>List</>;
  }
  if (showAs === "card") {
    return (
      <>
        <div className="card bg-primary shadow-xl">
          <Link href={`/paquetes/${convertToPath(paquete.title)}`}>
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
              {paquete.title}
            </h3>
            <p className="text-center my-3">{paquete.minidescription}</p>
            <div className="card-actions justify-center">
              <Link href={`/paquetes/${convertToPath(paquete.title)}`}>
                <a className="btn btn-secondary shadow-xl">Leer más</a>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Layout>
        <Link href={`/paquetes/paquete`}>
          <h1>{paquete.title}</h1>
          <p>{paquete.minidescription}</p>
        </Link>
      </Layout>
    </>
  );
}
