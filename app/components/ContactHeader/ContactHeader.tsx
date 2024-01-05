import React from "react";
import styles from "./ContactHeader.module.scss";

const ContactHeader: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.contactBox}>
        <img src="/envelope.svg" alt="Phone icon" className={styles.icons} />
        <p className={styles.text}>516 169 233</p>
      </div>
      <div className={styles.contactBox}>
        <img src="/phone.svg" alt="Envelope icon" className={styles.icons} />
        <a className={styles.text} href="mailto:nbt.lublin@gmail.com">
          nbt.lublin@gmail.com
        </a>
      </div>
    </header>
  );
};

export default ContactHeader;
