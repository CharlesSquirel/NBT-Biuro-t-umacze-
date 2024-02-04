"use client";
import style from "@/components/Header/Header.module.scss";
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
        src='./hamburger.svg'
        width='36'
        height='18'
        alt='Hamburger logo'
        className={style.hamburger}
        onClick={onClick}
      />
      <ul>
        <li>
          <Link href='/o_mnie' className={`${pathname === "/o_mnie" ? "active" : ""}`}>
            O mnie
          </Link>
        </li>
        <li>
          <Link href='/' className={`${pathname === "/" ? "active" : ""}`}>
            Oferta
          </Link>
        </li>
        <li>
          <Link href='/zaufali' className={`${pathname === "/trusted" ? "active" : ""}`}>
            Zaufali mi
          </Link>
        </li>
        <li>
          <Link href='/kontakt' className={`${pathname === "/contact" ? "active" : ""}`}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavDesktop;
