import { trustedContent } from "@/app/trusted/content";
import Image from "next/image";
import style from "../../trusted/Trusted.module.scss";

const TrustedList = () => {
  return (
    <section className={style.logoContainer}>
      {trustedContent.map((content, index) => {
        return (
          <div className={style.imgBox} key={index}>
            <Image width="115" height="115" src={content.image} alt={content.alt} className={style.logo} />
            <p>{content.name}</p>
          </div>
        );
      })}
    </section>
  );
};

export default TrustedList;
