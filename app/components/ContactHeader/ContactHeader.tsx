import styles from './ContactHeader.module.scss';
import Image from 'next/image';
import { contactInfo } from 'data/contactInfo';
import { clearEmptySpace } from 'utils/clearEmptySpace';

const ContactHeader: React.FC = () => {
  const { phone, email } =
    contactInfo[0];
  return (
    <header
      className={styles.container}
    >
      <p
        className={`${styles.text} ${styles.textSlogan}`}
      >
        Daj sobie przetłumaczyć!
      </p>
      <div
        className={styles.contactBox}
      >
        <Image
          src='/phone.svg'
          alt='Phone icon'
          className={styles.icons}
          width='15'
          height='15'
        />
        <a
          className={styles.text}
          href={`tel:+48${clearEmptySpace(
            phone
          )}`}
        >
          {phone}
        </a>
      </div>
      <div
        className={styles.contactBox}
      >
        <Image
          src='/envelope.svg'
          alt='Envelope icon'
          className={styles.icons}
          width='15'
          height='15'
        />
        <a
          className={styles.text}
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </div>
    </header>
  );
};

export default ContactHeader;
