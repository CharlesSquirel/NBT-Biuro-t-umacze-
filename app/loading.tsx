import Spinner from "@/components/Spinner/Spinner";
import globalStyle from "style/Globals.module.scss";

export default function Loading() {
  return (
    <div className={globalStyle.loading}>
      <Spinner />
      <p>Proszę czekać ...</p>
    </div>
  );
}
