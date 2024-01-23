import { offerContent } from "oferta/content";
import globalStyle from "style/Globals.module.scss";

const OfferList = () => {
  return (
    <>
      <ul className={globalStyle.description}>
        Oferuję tłumaczenia pisemne języka angielskiego z następujących dziedzin:
        {offerContent.map((offer, index) => (
          <li key={index}>{offer.text}</li>
        ))}
      </ul>
      <p>
        <span className={globalStyle.capitalizeBold}>Uwaga:</span> Strona rozliczeniowa tłumaczenia to 1800 znaków ze spacjami. Opłata naliczana jest za każdą rozpoczętą stronę. Ceny ustalane są
        indywidualnie w zależności od tematyki tłumaczenia, jego trudności, wielkości zlecenia oraz terminu wykonania tłumaczenia.
      </p>
    </>
  );
};

export default OfferList;
