import React from "react";
import globalStyle from "../style/Globals.module.scss";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oferta",
};

const Offer: React.FC = () => {
  return (
    <main className={globalStyle.container}>
      <div className={`${globalStyle.textContainer} ${globalStyle.offerBgImg}`}>
        <h2 className={globalStyle.sectionTitle}>Oferta</h2>
        <ul className={globalStyle.description}>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.sed do eiusmod tempor incididunt ut labore et</li>
          <li>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </li>
          <li>exercitation ullamco laboris nisi ut aliquip ex ea commodo </li>
          <li>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
          <li>qui officia deserunt mollit anim id est laborum</li>
        </ul>
      </div>
      <div className={globalStyle.backgroundImg}>
        <Image src="/bg-person.jpg" alt="Person at office desk" width="748" height="794" />
      </div>
    </main>
  );
};

export default Offer;
