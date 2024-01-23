import globalStyle from "style/Globals.module.scss";
import style from "./Trusted.module.scss";
import { Metadata } from "next";
import TrustedList from "@/components/TrustedList/TrustedList";
import SuspenseSpinner from "@/components/SuspenseSpinner/SuspenseSpinner";

export const metadata: Metadata = {
  title: "Zaufali mi",
};

const Trusted: React.FC = () => {
  return (
    <main className={style.container}>
      <h2 className={globalStyle.sectionTitle}>Zaufali mi</h2>
      <SuspenseSpinner>
        <TrustedList />
      </SuspenseSpinner>
    </main>
  );
};

export default Trusted;
