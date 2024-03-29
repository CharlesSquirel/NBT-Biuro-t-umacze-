import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./style/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactHeader from "@/components/ContactHeader/ContactHeader";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nbt.lublin.pl/"),
  title: {
    template: "%s - NBT Anna Król Nietuzinkowe Biuro Tłumaczeń",
    default: "NBT Anna Król Nietuzinkowe Biuro Tłumaczeń",
  },
  description: "Profesjonalne tłumaczenia z języka angielskiego. Daj sobie przetłumaczyć!",
  openGraph: {
    title: "%s - NBT Anna Król Nietuzinkowe Biuro Tłumaczeń",
    description: "Profesjonalne tłumaczenia z języka angielskiego. Daj sobie przetłumaczyć!",
    images: [
      {
        url: "../public/opengraph-image.jpg",
        width: 1200,
        height: 600,
      },
    ],
    url: "https://nbt.lublin.pl/",
    siteName: "NBT",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
        <meta name="google-site-verification" content="flyxXLj5Lu50dHysxVDVUG-ThlJffiGu3M_qxAED8co" />
      </head>
      <body className={poppins.className}>
        <>
          <ContactHeader />
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
