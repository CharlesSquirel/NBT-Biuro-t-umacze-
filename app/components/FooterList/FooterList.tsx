import style from "@/components/Footer/Footer.module.scss";
import { contactInfo } from "contactInfo";

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
            <p>{`REGON: ${data.regon}`}</p>
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
