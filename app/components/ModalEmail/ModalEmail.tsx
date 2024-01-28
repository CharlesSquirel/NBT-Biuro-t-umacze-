import style from "./ModalEmail.module.scss";

interface IModalEmail {
  onClose: () => void;
}

const ModalEmail = ({ onClose }: IModalEmail) => {
  return (
    <div className={style.container} role='dialog' aria-modal='true' aria-labelledby='message'>
      <p className={style.message} id='message'>
        Pomyślnie wysłano wiadomość
      </p>
      <button className={style.btn} onClick={onClose}>
        OK
      </button>
    </div>
  );
};

export default ModalEmail;
