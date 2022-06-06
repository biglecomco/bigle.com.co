import Layout from "../../components/Layout";
import Paquete from "../../components/Paquete";
import { getPaqueteData, getPathsFromIds } from "../../utils/utils";

export default function PaquetesPage({ paqueteData }) {
  return (
    <>
      <Layout>
        <Paquete paquete={paqueteData.data} showAs="page" />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getPathsFromIds();
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const data = await getPaqueteData(id);
  return {
    props: {
      paqueteData: data,
    },
  };
}
