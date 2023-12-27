import React from "react";
import globalStyle from "./Globals.module.scss";
import Image from "next/image";
import Img from "../public/bg-books.jpg"

const About: React.FC = () => {
  return (
    <main className={globalStyle.container}>
      <div className={`${globalStyle.textContainer} ${globalStyle.aboutBgImg}`}>
        <h2 className={globalStyle.sectionTitle}>O mnie</h2>
        <ul className={globalStyle.description}>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.sed do eiusmod tempor incididunt ut labore et</li>
          <li>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </li>
          <li>exercitation ullamco laboris nisi ut aliquip ex ea commodo </li>
          <li>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
          <li>qui officia deserunt mollit anim id est laborum</li>
        </ul>
      </div>
      <div className={globalStyle.backgroundImg}>
        <Image src={Img} alt="Person with books" width="748" height="794"/>
      </div>
    </main>
  );
};

export default About;
