import React from "react";
import style from "./Footer.module.scss"

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.infoContainer}>
        <div className={style.infoBox}>
          <p>NBT Anna Król </p>
          <p>Biuro Tłumaczeń Języka Angielskiego</p>
        </div>
        <div className={style.infoBox}>
          <p>ul. Strzeszewskiego 25/23,</p>
          <p>20-153 Lublin</p>
        </div>
        <div className={style.infoBox}>
          <p>NIP: 712-246-78-95</p>
          {/* <p>REGON: 060567875</p> */}
        </div>
        <div className={style.infoBox}>
          <p>tel.: 516 169 233</p>
          <p>email: nbt.tlumaczenia@gmail.com</p>
        </div>
      </div>
      <p className={style.freepikInfo}>Wszystkie zdjęcia wykorzystane na stronie pochodzą z Freepik.com</p>
    </footer>
  );
};

export default Footer;

