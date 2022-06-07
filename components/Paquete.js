import Link from "next/link";
import Image from "next/image";

import Hero from "./Hero";
import TitleSeparator from "./TitleSeparator";
import Head from "next/head";

export default function Paquete(props) {
  if (props.showAs === "page") {
    return (
      <>
        <Head>
          <title>Bigle | {props.title}</title>
          <meta name="description" content="Soluciones a la medida" />
        </Head>
        <Hero title={props.title} />
        <TitleSeparator title={props.minidescription} />
        <div className="flex flex-col md:flex-row gap-4 mx-2 my-5 md:mx-0">
          <div className="md:flex-1 p-10 text-2xl text-secondary bg-primary shadow-xl rounded-xl min-h-[40vh]">
            <p>{props.description}</p>
          </div>
          <div className="md:flex-1 p-10 text-xl text-primary bg-base-200 shadow-xl rounded-xl">
            <p>Aquí va una imagen del producto o alguna ilustración</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:rounded-xl shadow-xl bg-accent-focus w-full my-5">
          <div className="text-4xl text-primary font-semibold text-center my-4">
            ¿Interesado en nuestro {props.title}?
          </div>
          <Link href="/contactanos">
            <a className="btn btn-primary btn-lg animate-pulse my-5">
              Contáctanos
            </a>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mx-4 md:mx-0">
          <div className="flex-1 p-10 text-xl text-primary bg-base-200 shadow-xl rounded-xl">
            <p>Aquí va una imagen del producto o alguna ilustración</p>
          </div>
          <div className="flex-1 p-10 text-xl text-secondary bg-primary shadow-xl rounded-xl min-h-[40vh]">
            <p>{props.description}</p>
          </div>
        </div>

        <div className="flex flex-col my-5 md:mx-0">
          <TitleSeparator title="¿Que incluye?" />
          <div className="overflow-x-auto shadow-xl">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Característica</th>
                  <th>¿Lo tiene?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover">
                  <td>Sitio web completo</td>
                  <td>¿?</td>
                </tr>

                <tr className="hover">
                  <td>Cuatro páginas a tu gusto</td>
                  <td>¡Sí!</td>
                </tr>

                <tr className="hover">
                  <td>Formulario de contacto</td>
                  <td>No.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col items-center md:rounded-xl shadow-xl bg-accent-focus w-full my-5">
          <div className="text-4xl text-primary font-semibold text-center my-4">
            ¿Interesado en nuestro {props.title}?
          </div>
          <Link href="/contactanos">
            <a className="btn btn-primary btn-lg animate-pulse my-5">
              Contáctanos
            </a>
          </Link>
        </div>
      </>
    );
  }
  if (props.showAs === "list") {
    return <>List</>;
  }
  if (props.showAs === "card") {
    return (
      <>
        <div className="card bg-primary shadow-xl">
          <Link href={`/paquetes/${props.category}/${props.slug}`}>
            <a className="relative w-full h-48">
              <Image
                src={require("/assets/images/logo-blanco.png")}
                layout="fill"
                objectFit="contain"
                quality={100}
                alt={`Imagen de ${props.title}`}
              />
            </a>
          </Link>
          <div className="card-body text-base-100">
            <h3 className="text-2xl font-medium text-center">{props.title}</h3>
            <p className="text-center my-3">{props.minidescription}</p>
            <div className="card-actions justify-center">
              <Link href={`/paquetes/${props.category}/${props.slug}`}>
                <a className="btn btn-secondary shadow-xl">Leer más</a>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <></>;
}
