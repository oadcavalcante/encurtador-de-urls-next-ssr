import "./globals.css";

export const metadata = {
  title: "Encurtador de URLs",
  description: "Uma aplicação simples de encurtamento de URLs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <header>{/* <h1>Encurtador de URLs</h1> */}</header>
        <main>{children}</main>
      </body>
    </html>
  );
}
