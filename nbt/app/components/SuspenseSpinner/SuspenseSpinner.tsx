import React, { PropsWithChildren, Suspense } from "react";
import globalStyle from "../../style/Globals.module.scss";
import Spinner from "../Spinner/Spinner";

const SuspenseSpinner = ({ children }: PropsWithChildren) => {
  return (
    <Suspense
      fallback={
        <div className={globalStyle.spinnerContainer}>
          <Spinner />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseSpinner;
