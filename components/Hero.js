import Link from "next/link";
import Image from "next/image";

export default function Hero({
  title = "Titulo de prueba",
  text = "Hola mundo",
  link,
  linkTitle,
  image,
  imagePosition = "",
}) {
  return (
    <>
      <div class="hero rounded-lg py-8 m-4 md:mx-0 bg-primary shadow-lg">
        {imagePosition === "" ? (
          <div class="hero-content text-center">
            <div class="max-w-md">
              <h1 class="text-5xl font-bold text-accent">{title}</h1>
              <p class="py-6 text-accent">{text}</p>
              {link && (
                <Link href={link}>
                  <a class="btn btn-primary">{linkTitle}</a>
                </Link>
              )}
            </div>
          </div>
        ) : imagePosition === "left" ? (
          <div class="hero-content flex-col lg:flex-row gap-10">
            <img src={image} className="max-w-sm rounded-lg" />
            <div class="max-w-md">
              <h1 class="text-5xl font-bold text-accent">{title}</h1>
              <p class="py-6 text-accent">{text}</p>
              {link && (
                <Link href={link}>
                  <a class="btn btn-primary">{linkTitle}</a>
                </Link>
              )}
            </div>
          </div>
        ) : imagePosition === "right" ? (
          <div class="hero-content flex-col lg:flex-row-reverse gap-10">
            <img src={image} className="max-w-sm rounded-lg" />
            <div class="max-w-md">
              <h1 class="text-5xl font-bold text-accent">{title}</h1>
              <p class="py-6 text-accent">{text}</p>
              {link && (
                <Link href={link}>
                  <a class="btn btn-primary">{linkTitle}</a>
                </Link>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
