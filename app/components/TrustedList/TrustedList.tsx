import { trustedContent } from "zaufali/content";
import Image from "next/image";
import style from "zaufali/Trusted.module.scss";

const TrustedList = () => {
  return (
    <section className={style.logoContainer}>
      {trustedContent.map((content, index) => {
        return (
          <div className={style.imgBox} key={index}>
            <a href={content.link} target="_blank">
              <Image width="115" height="115" src={content.image} alt={content.alt} className={style.logo} />
            </a>
            <p>{content.name}</p>
          </div>
        );
      })}
    </section>
  );
};

export default TrustedList;
