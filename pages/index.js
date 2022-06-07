import Head from "next/head";
import Image from "next/image";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Slider from "react-slick";

import Footer from "../components/Footer";
import Header from "../components/Header";
import LogoBlanco from "../assets/images/logo-blanco.png";
import TitleSeparator from "../components/TitleSeparator";
import { paquetes } from "../data/paquetes";
import Paquete from "../components/Paquete";

export default function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <Head>
        <title>Bigle | Inicio</title>
        <meta name="description" content="Soluciones a la medida" />
      </Head>
      <Header />
      <div className="bg-gradient-to-b from-primary to-secondary bg-opacity-50 hero py-10 bg-primary shadow-lg min-h-screen relative">
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
          <div className="max-w-sm">
            <Image src={LogoBlanco} alt="Logo Bigle" className="" />
          </div>
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
      <TitleSeparator
        title={"Nuestros servicios"}
        text={"¿Qué podemos hacer?"}
      />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3 sm:p-0">
          {paquetes.map((card) => (
            <Paquete
              key={card.id}
              category={card.category}
              title={card.title}
              slug={card.slug}
              image={card.image}
              description={card.description}
              minidescription={card.minidescription}
              caracteristicas={card.caracteristicas}
              showAs="card"
            />
          ))}
        </div>
      </div>
      <TitleSeparator title={"Nuestros clientes"} />
      <div className="grid grid-cols-1 gap-4 p-3 sm:p-0">
        <div className="col-span-1">
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
      <Footer />
    </>
  );
}
