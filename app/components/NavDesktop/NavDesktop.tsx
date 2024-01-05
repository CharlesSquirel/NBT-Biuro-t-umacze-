"use client";
import React from "react";
import style from "../Header/Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  onClick: () => void;
}

const NavDesktop: React.FC<Props> = ({ onClick }) => {
  const pathname = usePathname();
  return (
    <nav className={style.nav}>
      <Image
        src="./hamburger.svg"
        width="36"
        height="18"
        alt="Hamburger logo"
        className={style.hamburger}
        onClick={onClick}
      />
      <ul>
        <li>
          <Link href="/" className={`${pathname === "/" ? "active" : ""}`}>
            O mnie
          </Link>
        </li>
        <li>
          <Link
            href="/offer"
            className={`${pathname === "/offer" ? "active" : ""}`}
          >
            Oferta
          </Link>
        </li>
        <li>
          <Link
            href="/trusted"
            className={`${pathname === "/trusted" ? "active" : ""}`}
          >
            Zaufali mi
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`${pathname === "/contact" ? "active" : ""}`}
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavDesktop;
