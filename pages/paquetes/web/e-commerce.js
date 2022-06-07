import Layout from "../../../components/Layout";
import Paquete from "../../../components/Paquete";
import { paquetes } from "../../../data/paquetes";

export default function ECommerce() {
  return (
    <>
      <Layout>
        {paquetes
          .filter((paquete) => paquete.slug === "e-commerce")
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
