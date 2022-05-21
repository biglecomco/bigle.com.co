import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const [navScrolled, setNavScrolled] = useState("");

  useEffect(() => {
    if (clientWindowHeight > 0) {
      setNavScrolled("scrolled");
      console.log(clientWindowHeight + navScrolled);
    } else {
      setNavScrolled("");
      console.log(clientWindowHeight + navScrolled);
    }
  }, [clientWindowHeight]);

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        className={
          clientWindowHeight === 0
            ? `bg-transparent px-4 md:px-6 py-12 sticky top-0 w-full z-50 duration-500 ease-in-out`
            : `bg-primary px-4 md:px-4 py-6 shadow sticky top-0 w-full z-50 duration-500 ease-in-out`
        }
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div
            className={
              clientWindowHeight === 0
                ? "w-28 sm:36 duration-500 ease-in-out"
                : "w-16 md:24 duration-500 ease-in-out"
            }
          >
            <Link href="/">
              <img
                src={
                  clientWindowHeight === 0
                    ? "/LogoBigle.svg"
                    : "/LogoBigleBlanco.svg"
                }
                alt="Bigle"
              />
            </Link>
          </div>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center mx-7 p-1 text-sm rounded-lg md:hidden"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
          <div
            className={`${
              isOpen ? "" : "hidden"
            } w-full md:block md:w-auto duration-200 transition`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li
                className={
                  router.asPath === "/"
                    ? "text-base bg-secondary hover:bg-secondary-focus block py-2 px-4 rounded font-semibold shadow text-white cursor-pointer duration-500"
                    : "text-base hover:bg-secondary-focus block py-2 px-4 text-secondary rounded font-medium duration-500"
                }
              >
                <Link href="/">Inicio</Link>
              </li>
              <li
                className={
                  router.asPath === "/servicios"
                    ? "text-base bg-secondary hover:bg-secondary-focus block py-2 px-4 rounded font-semibold shadow text-white cursor-pointer duration-500"
                    : "text-base hover:bg-secondary-focus block py-2 px-4 text-secondary rounded font-medium duration-500"
                }
              >
                <Link href="/servicios">Servicios</Link>
              </li>
              {/* <li
                className={
                  router.asPath === "/quienes-somos"
                    ? "text-base bg-secondary hover:bg-secondary-focus block py-2 px-4 rounded font-semibold shadow text-white cursor-pointer duration-500"
                    : "text-base hover:bg-secondary-focus block py-2 px-4 text-secondary rounded font-medium duration-500"
                }
              >
                <Link href="/quienes-somos">Quienes somos</Link>
              </li> */}
              <li
                className={
                  router.asPath === "/contactenos"
                    ? "text-base bg-secondary hover:bg-secondary-focus block py-2 px-4 rounded font-semibold shadow text-white cursor-pointer duration-500"
                    : "text-base hover:bg-secondary-focus block py-2 px-4 text-secondary rounded font-medium duration-500"
                }
              >
                <Link href="/contactenos">Contáctenos</Link>
              </li>
              <li
                className={
                  router.asPath === "/posts"
                    ? "text-base bg-secondary hover:bg-secondary-focus block py-2 px-4 rounded font-semibold shadow text-white cursor-pointer duration-500"
                    : "text-base hover:bg-secondary-focus block py-2 px-4 text-secondary rounded font-medium duration-500"
                }
              >
                <Link href="/posts">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
