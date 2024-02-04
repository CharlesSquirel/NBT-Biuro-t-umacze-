import Image from "next/image";
import Link from "next/link";
import style from "./NavMobile.module.scss";
import globalStyle from "style/Globals.module.scss";
import closeImg from "../../../public/close.svg";

interface Props {
  onClick: () => void;
}

const NavMobile: React.FC<Props> = ({ onClick }) => {
  return (
    <nav
      className={style.navMobile}
      onClick={onClick}
      role='dialog'
      aria-modal='true'
      aria-labelledby='menu'
    >
      <ul>
        <li id='menu'>Menu</li>
        <li>
          <Link href='/o_mnie'>O mnie</Link>
        </li>
        <li>
          <Link href='/'>Oferta</Link>
        </li>
        <li>
          <Link href='/zaufali'>Zaufali mi</Link>
        </li>
        <li>
          <Link href='/kontakt'>Kontakt</Link>
        </li>
      </ul>
      <button className={style.closeBtn}>
        <Image src={closeImg} fill alt='' aria-hidden='true' />
      </button>
      <div className={globalStyle.backdrop} style={{ zIndex: "-1" }}></div>
    </nav>
  );
};

export default NavMobile;
