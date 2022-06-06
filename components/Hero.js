import Link from "next/link";
import Image from "next/image";

export default function Hero({
  title = "Titulo de prueba",
  text,
  link,
  linkTitle,
  image,
  imagePosition = "",
}) {
  return (
    <>
      <div className="hero rounded-b-xl py-8 bg-primary shadow-xl">
        {imagePosition === "" ? (
          <div className="hero-content text-center">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold text-accent">{title}</h1>
              <p className="py-6 text-accent">{text}</p>
              {link && (
                <Link href={link}>
                  <a className="btn btn-primary">{linkTitle}</a>
                </Link>
              )}
            </div>
          </div>
        ) : imagePosition === "left" ? (
          <div className="hero-content flex-col lg:flex-row gap-10">
            <Image src={require(`${image}`)} className="max-w-sm rounded-lg" />
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold text-accent">{title}</h1>
              <p className="py-6 text-accent">{text}</p>
              {link && (
                <Link href={link}>
                  <a className="btn btn-primary">{linkTitle}</a>
                </Link>
              )}
            </div>
          </div>
        ) : imagePosition === "right" ? (
          <div className="hero-content flex-col lg:flex-row-reverse gap-10">
            <Image src={require(`${image}`)} className="max-w-sm rounded-lg" />
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold text-accent">{title}</h1>
              <p className="py-6 text-accent">{text}</p>
              {link && (
                <Link href={link}>
                  <a className="btn btn-primary">{linkTitle}</a>
                </Link>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
