import Head from "next/head";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#caf0f8" />
        <meta name="apple-mobile-web-app-title" content="Bigle" />
        <meta name="application-name" content="Bigle" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#caf0f8" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
