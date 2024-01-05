import React from "react";
import globalStyle from "../style/Globals.module.scss";
import style from "./Trusted.module.scss";
import Image from "next/image";
import { trustedContent } from "./content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zaufali mi",
};

const Trusted: React.FC = () => {
  return (
    <main className={style.container}>
      <h2 className={globalStyle.sectionTitle}>Zaufali mi</h2>
      <section className={style.logoContainer}>
        {trustedContent?.map((content, index) => {
          return (
            <div className={style.imgBox} key={index}>
              <Image width="115" height="115" src={content.image} alt={content.alt} className={style.logo} />
              <p>{content.name}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Trusted;
