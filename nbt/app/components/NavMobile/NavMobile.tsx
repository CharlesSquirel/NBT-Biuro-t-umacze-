import React from "react";
import style from "./NavMobile.module.scss";

interface Props {
  onClick: () => void;
}

const NavMobile: React.FC<Props> = ({ onClick }) => {
  return (
    <nav className={style.navMobile} onClick={onClick}>
      <ul>
        <li>Menu</li>
        <li>O mnie</li>
        <li>Oferta</li>
        <li>Zaufali mi</li>
        <li>Kontakt</li>
      </ul>
    </nav>
  );
};

export default NavMobile;
