import { contactInfo } from "@/app/contactInfo";
import style from "../Footer/Footer.module.scss";
import React from "react";

const FooterList = () => {
  return (
    <>
      {contactInfo.map((data, index) => (
        <>
          <div className={style.infoBox}>
            <p>{`${data.addressPrimary},`}</p>
            <p>{data.addressSecondary}</p>
          </div>
          <div className={style.infoBox}>
            <p>{`NIP: ${data.nip}`}</p>
            {/* <p>{`REGON: ${data.regon}`}</p> */}
          </div>
          <div className={style.infoBox}>
            <p>{`tel.: ${data.phone}`}</p>
            <p>{`email: ${data.email}`}</p>
          </div>
        </>
      ))}
    </>
  );
};

export default FooterList;
