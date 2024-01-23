import globalStyle from "style/Globals.module.scss";
import Image from "next/image";
import { Metadata } from "next";
import OfferList from "@/components/OfferList/OfferList";
import SuspenseSpinner from "@/components/SuspenseSpinner/SuspenseSpinner";

export const metadata: Metadata = {
  title: "Oferta",
};

const Offer: React.FC = () => {
  return (
    <main className={globalStyle.container}>
      <div className={`${globalStyle.textContainer} ${globalStyle.offerBgImg}`}>
        <h2 className={globalStyle.sectionTitle}>Oferta</h2>
        <SuspenseSpinner>
          <OfferList />
        </SuspenseSpinner>
      </div>
      <div className={globalStyle.backgroundImg}>
        <Image src="/bg-person.jpg" alt="Person at office desk" width="748" height="794" />
      </div>
    </main>
  );
};

export default Offer;
