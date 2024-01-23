import Link from "next/link";
import globalStyles from "style/Globals.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={globalStyles.notFound}>
      <p>Nie można znaleźć strony :(</p>
      <p>
        <Link href="/">Wróć na stronę główną</Link>
      </p>
    </div>
  );
};

export default NotFound;
