export default function Footer() {
  return (
    <>
      <footer className="footer footer-center p-10 bg-primary text-accent z-50">
        <div>
          <span className="text-xl font-semibold">Bigle</span>
          <p>
            Copyright © {new Date().getUTCFullYear()} - Todos los derechos
            reservados
          </p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/#/" rel="noopener noreferrer"></a>
            <a href="https://www.instagram.com/#" rel="noopener noreferrer"></a>
          </div>
        </div>
      </footer>
    </>
  );
}
