import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="container min-h-screen mx-auto">{children}</div>
      <Footer />
    </>
  );
}
