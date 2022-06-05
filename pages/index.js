import Head from "next/head";
import Script from "next/script";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from "../assets/images/LogoBigleBlanco.svg";
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
      </Head>
      <Header />
      <div className="bg-gradient-to-b from-primary to-secondary bg-opacity-50 hero py-10 bg-primary shadow-lg h-screen relative">
        <Particles
          id="tsparticles"
          options={{
            style: {
              position: "absolute",
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 1,
                },
                repulse: {
                  distance: 80,
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
                width: 0.5,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.8,
                straight: false,
              },
              number: {
                value: 100,
              },
              opacity: {
                value: 0.4,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 4 },
              },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
            responsive: [
              {
                maxWidth: 800,
                options: {
                  particles: {
                    number: {
                      value: 40,
                    },
                    size: {
                      value: { min: 1, max: 4 },
                    },
                  },
                },
              },
            ],
            detectRetina: true,
          }}
          init={particlesInit}
          loaded={particlesLoaded}
        />
        <div className="hero-content flex-col lg:flex-row gap-10">
          <Logo className="w-full" />
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-accent">
              Paquetes de servicios online para tu empresa
            </h1>
            <p className="py-6 text-xl text-white">
              Nuestro equipo está dispuesto a ayudarte
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
