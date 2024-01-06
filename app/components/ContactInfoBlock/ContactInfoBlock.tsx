import { contactInfo } from "@/app/contactInfo";
import style from "../../contact/Contact.module.scss";
import globalStyle from "../../style/Globals.module.scss";

const ContactInfoBlock = () => {
  const { addressPrimary, addressSecondary, nip, regon, phone, email } = contactInfo[0];
  return (
    <div className={style.contactInfoContainer}>
      <div className={style.infoGroup}>
        <p className={globalStyle.capitalizeBold}>NBT Anna Król </p>
        <p>Biuro Tłumaczeń Języka Angielskiego</p>
      </div>
      <div className={style.infoGroup}>
        <p>{addressPrimary}</p>
        <p>{addressSecondary}</p>
      </div>
      <div className={style.infoGroup}>
        <p>{nip}</p>
        <p>{regon}</p>
      </div>
      <div className={style.infoGroup}>
        <p className={globalStyle.capitalizeBold}>Adres email:</p>
        <p>{email}</p>
      </div>
      <div className={style.infoGroup}>
        <p className={globalStyle.capitalizeBold}>Telefon:</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default ContactInfoBlock;
