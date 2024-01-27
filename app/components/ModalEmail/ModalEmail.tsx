import style from "./ModalEmail.module.scss";

interface IModalEmail {
  onClose: () => void;
}

const ModalEmail = ({ onClose }: IModalEmail) => {
  return (
    <div className={style.container}>
      <p className={style.message}>Pomyślnie wysłano wiadomość</p>
      <button className={style.btn} onClick={onClose}>
        OK
      </button>
    </div>
  );
};

export default ModalEmail;
