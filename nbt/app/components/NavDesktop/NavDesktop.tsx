import React from "react";
import style from "../Header/Header.module.scss";
import Image from "next/image";
import Link from "next/link";

interface Props {
  onClick: () => void;
}

const NavDesktop: React.FC<Props> = ({ onClick }) => {
  return (
    <nav className={style.nav}>
      <Image src="./hamburger.svg" width="36" height="18" alt="Hamburger logo" className={style.hamburger} onClick={onClick} />
      <ul>
        <li>
          <Link href="/">O mnie</Link>
        </li>
        <li>
          <Link href="/offer">Oferta</Link>
        </li>
        <li>
          <Link href="/trusted">Zaufali mi</Link>
        </li>
        <li>
          <Link href="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavDesktop;
