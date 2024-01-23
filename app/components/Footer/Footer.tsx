import style from "./Footer.module.scss";
import FooterList from "@/components/FooterList/FooterList";

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <address className={style.address}>
        <div className={style.infoContainer}>
          <div className={style.infoBox}>
            <p>NBT Anna Król </p>
            <p>Biuro Tłumaczeń Języka Angielskiego</p>
          </div>
          <FooterList />
        </div>
        <p className={style.freepikInfo}>Wszystkie zdjęcia wykorzystane na stronie pochodzą z Freepik.com</p>
      </address>
    </footer>
  );
};

export default Footer;
