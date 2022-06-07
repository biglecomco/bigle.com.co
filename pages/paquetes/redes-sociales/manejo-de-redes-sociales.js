import Layout from "../../../components/Layout";
import Paquete from "../../../components/Paquete";
import { paquetes } from "../../../data/paquetes";

export default function ManejoRedes() {
  return (
    <>
      <Layout>
        {paquetes
          .filter((paquete) => paquete.slug === "manejo-de-redes-sociales")
          .map((paquete) => (
            <Paquete
              key={paquete.id}
              title={paquete.title}
              link={paquete.slug}
              miniDescription={paquete.miniDescription}
              description={paquete.description}
              caracteristicas={paquete.caracteristicas}
              imagen1=""
              imagen2=""
              showAs="page"
            />
          ))}
      </Layout>
    </>
  );
}
