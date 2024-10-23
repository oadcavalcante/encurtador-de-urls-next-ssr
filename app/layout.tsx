import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Head from "next/head";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Home | Encurtador de URLs</title>
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
