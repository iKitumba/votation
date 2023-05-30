import { Header } from "@/components/Header";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Votação",
  description:
    "Aplicativo para criação de eleições que tornam a tomada de decisão justa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
