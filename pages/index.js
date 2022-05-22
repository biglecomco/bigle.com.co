import Head from "next/head";
import Script from "next/script";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};
  return (
    <>
      <Head>
        <title>Bigle | Inicio</title>
        <meta name="description" content="Soluciones a la medida" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="bg-gradient-to-b from-primary to-secondary bg-opacity-50 hero py-10 bg-primary shadow-lg h-screen relative">
        <Particles
          id="tsparticles"
          options={{
            background: {
              image: "",
              position: "",
              repeat: "",
              size: "",
              opacity: 1,
            },
            style: {
              position: "absolute",
            },
            backgroundMask: {
              composite: "destination-out",
              cover: {
                color: {
                  value: "#fff",
                },
                opacity: 1,
              },
              enable: false,
            },
            fullScreen: {
              enable: true,
              zIndex: 0,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onDiv: {
                  selectors: [],
                  enable: false,
                  mode: [],
                  type: "circle",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 3,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                value: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
            responsive: [],
            detectRetina: true,
          }}
          init={particlesInit}
          loaded={particlesLoaded}
        />
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img src="/LogoBigleBlanco.svg" className="max-w-xs" />
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-accent">
              Paquetes de servicios online para tu empresa
            </h1>
            <p className="py-6 text-xl text-accent">
              Nuestro equipo está dispuesto a ayudarte
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
