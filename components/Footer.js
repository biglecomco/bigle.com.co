import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import LogoBlanco from "../assets/images/logo-blanco.png";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center p-10 mt-10 bg-primary text-accent z-50">
        <div className="max-w-xs">
          <Image src={LogoBlanco} className="" />
          <p>
            Copyright © {new Date().getUTCFullYear()} - Todos los derechos
            reservados
          </p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.facebook.com/bigle.com.co/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebook className="text-3xl" />
            </a>
            <a
              href="https://www.instagram.com/bigle.com.co"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram className="text-3xl" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
