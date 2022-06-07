import Layout from "../../../components/Layout";
import Paquete from "../../../components/Paquete";
import { paquetes } from "../../../data/paquetes";

export default function WebsiteAvanzado() {
  return (
    <>
      <Layout>
        {paquetes
          .filter((paquete) => paquete.slug === "website-avanzado")
          .map((paquete) => (
            <Paquete
              key={paquete.id}
              title={paquete.title}
              link={paquete.slug}
              minidescription={paquete.minidescription}
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
