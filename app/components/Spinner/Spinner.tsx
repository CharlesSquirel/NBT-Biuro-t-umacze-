import React from "react";
import style from "./Spinner.module.scss";
import HalfLogo from "./HalfLogo";

const Spinner: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.firstLogo}>
        <HalfLogo />
      </div>
      <div className={style.secondLogo}>
        <HalfLogo />
      </div>
    </div>
  );
};

export default Spinner;
