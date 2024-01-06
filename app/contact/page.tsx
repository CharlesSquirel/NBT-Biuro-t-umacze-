import { Metadata } from "next";
import globalStyle from "../style/Globals.module.scss";
import style from "./Contact.module.scss";
import ContactInfoBlock from "../components/ContactInfoBlock/ContactInfoBlock";

export const metadata: Metadata = {
  title: "Kontakt",
};

const Contact = () => {
  return (
    <main className={globalStyle.container}>
      <div className={style.contactContainer}>
        <h2 className={globalStyle.sectionTitle}>Kontakt</h2>
        <div className={style.contentContainer}>
          <ContactInfoBlock />
          <div className={style.formContainer}></div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
