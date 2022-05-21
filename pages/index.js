import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Hero from "../components/Hero";
import Header from "../components/Header";
export default function Home() {
  return (
    <>
      <Head>
        <title>Bigle | Inicio</title>
        <meta name="description" content="Soluciones a la medida" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div class="hero py-10 bg-primary shadow-lg">
        <motion.div
          style={{
            perspective: 1000,
          }}
          class="hero-content flex-col lg:flex-row gap-10"
          onMouseMove={handleMouse}
        >
          <motion.img
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
            }}
            src="/LogoBigleBlanco.svg"
            className="max-w-sm rounded-lg"
          />
          <div class="max-w-md">
            <h1 class="text-5xl font-bold text-accent">A tu medida</h1>
            <p class="py-6 text-accent">Holaaaaaaaaaaaaaaaaaaa</p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
