import React from "react";
import style from "../Header/Header.module.scss";
import globalStyle from "../../style/Globals.module.scss";

const SecondaryMobileHeader: React.FC = () => {
  return (
    <div className={style.secondaryMobileContainer}>
      <h2 className={style.secondarySubtitle}>
        <span className={globalStyle.capitalizeBold}>N</span>ietuzinkowe <span className={globalStyle.capitalizeBold}>B</span>iuro <span className={globalStyle.capitalizeBold}>T</span>łumaczeń Języka
        Angielskiego
      </h2>
      <p>Daj sobie przetłumaczyć!</p>
    </div>
  );
};

export default SecondaryMobileHeader;
