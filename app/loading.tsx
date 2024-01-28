import globalStyle from "style/Globals.module.scss";
import Spinner from "@/components/Spinner/Spinner";

export default function Loading() {
  return (
    <div className={globalStyle.loading}>
      <Spinner />
      <p>Proszę czekać ...</p>
    </div>
  );
}
