'use client'
import React, { useState } from "react";
import style from "./Header.module.scss";
import logoImg from "../../../public/logo.svg";
import NavDesktop from "../NavDesktop/NavDesktop";
import NavMobile from "../NavMobile/NavMobile";
import SecondaryMobileHeader from "../SecondaryMobileHeader/SecondaryMobileHeader";
import Image from "next/image";

const Header: React.FC = () => {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
  const handleNavMobileOpen = (): void => {
    setIsNavMobileOpen(!isNavMobileOpen);
  };
  return (
    <>
      <header className={style.container}>
        <div className={style.logoContainer}>
          <Image src={logoImg} alt="Logo" className={style.logo} />
          <div className={style.textContainer}>
            <div className={style.titleContainer}>
              <h1 className={style.title}>
                <span className={style.capitalizeBold}>NBT</span> Anna Król
              </h1>
              <h2 className={style.subtitle}>
                <span className={style.capitalizeBold}>N</span>ietuzinkowe <span className={style.capitalizeBold}>B</span>iuro <span className={style.capitalizeBold}>T</span>łumaczeń Języka
                Angielskiego
              </h2>
            </div>
            <p className={style.text}>Daj sobie przetłumaczyć!</p>
          </div>
        </div>
        <NavDesktop onClick={handleNavMobileOpen} />

        {isNavMobileOpen && <NavMobile onClick={handleNavMobileOpen} />}
      </header>
      <SecondaryMobileHeader />
    </>
  );
};

export default Header;