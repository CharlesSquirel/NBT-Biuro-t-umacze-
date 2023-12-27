import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./style/globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NBT – Nietuzinkowe Biuro Tłumaczeń",
  description: "Nietuzinkowe Biuro Tłumaczeń",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className={poppins.className}>
        <>
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
