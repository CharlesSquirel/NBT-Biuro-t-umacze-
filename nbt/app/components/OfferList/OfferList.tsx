import { offerContent } from "@/app/offer/content";
import globalStyle from "../../style/Globals.module.scss";

const OfferList = () => {
  return (
    <ul className={globalStyle.description}>
      {offerContent.map((offer, index) => (
        <li key={index}>{offer.text}</li>
      ))}
    </ul>
  );
};

export default OfferList;
