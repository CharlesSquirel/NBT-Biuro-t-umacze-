import Image from "next/image";
import type { Metadata } from "next";
import globalStyle from "style/Globals.module.scss";

export const metadata: Metadata = {
  title: "O mnie",
};

const About: React.FC = () => {
  return (
    <main className={globalStyle.container}>
      <div className={`${globalStyle.textContainer} ${globalStyle.aboutBgImg}`}>
        <h2 className={globalStyle.sectionTitle}>O mnie</h2>
        <p>
          Witam w <span className={globalStyle.capitalizeBold}>N</span>ietuzinkowym{" "}
          <span className={globalStyle.capitalizeBold}>B</span>iurze{" "}
          <span className={globalStyle.capitalizeBold}>T</span>
          łumaczeń!
        </p>
        <p>
          Przekładem zajmuję się zawodowo od 2004 roku. Pierwsze szlify zdobywałam w międzynarodowym
          biurze tłumaczeń jako kierownik projektów oraz tłumacz. Dość szybko rozpoczęłam
          działalność freelancera, nawiązując współpracę z pracownikami naukowymi Uniwersytetu Jana
          Kochanowskiego w Kielcach, Politechniki Lubelskiej oraz Uniwersytetu Marii
          Curie-Skłodowskiej w Lublinie. Wykonuję również tłumaczenia dla jednostek samorządu
          terytorialnego, osób prywatnych, firm oraz biur tłumaczeń.
        </p>
        <p>
          Z uwagi na zainteresowania muzyczne, przez blisko dekadę pracowałam równolegle w
          instytucjach kultury zajmujących się organizacją wydarzeń z dziedziny muzyki klasycznej i
          awangardowej.
        </p>
      </div>
      <div className={globalStyle.backgroundImg}>
        <Image src='/bg-books.webp' alt='Person with books' width='748' height='794' />
      </div>
    </main>
  );
};

export default About;
