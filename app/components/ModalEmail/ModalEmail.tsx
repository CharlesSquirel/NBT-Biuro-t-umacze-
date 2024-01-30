import { useModalFocus } from "utils/hooks/useModalFocus";
import style from "./ModalEmail.module.scss";
import globalStyle from "style/Globals.module.scss";

interface IModalEmail {
  onClose: () => void;
}

const ModalEmail = ({ onClose }: IModalEmail) => {
  const refToFocus = useModalFocus();
  return (
    <>
      <div className={globalStyle.backdrop}></div>
      <div className={style.container} role='dialog' aria-modal='true' aria-labelledby='message'>
        <p className={style.message} id='message'>
          Pomyślnie wysłano wiadomość
        </p>
        <button className={style.btn} onClick={onClose} tabIndex={-1} ref={refToFocus}>
          OK
        </button>
      </div>
    </>
  );
};

export default ModalEmail;
