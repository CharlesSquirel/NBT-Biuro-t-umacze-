import style from "./ContactForm.module.scss";
const ContactForm = () => {
  return (
    <form className={style.container}>
      <h3 className={style.title}>Napisz do mnie!</h3>
      <div className={style.inputBox}>
        <label htmlFor="name" className={style.labelHidden}>
          Imię
        </label>
        <input type="text" name="name" placeholder="Imię" className={style.input} id="name" />
        <p role="alert" className={style.errorMessage}>
          Invalid input
        </p>
      </div>
      <div className={style.inputBox}>
        <label htmlFor="email" className={style.labelHidden}>
          Email
        </label>
        <input type="text" name="name" placeholder="Email" className={style.input} id="email" />
        <p role="alert" className={style.errorMessage}>
          Invalid input
        </p>
      </div>
      <div className={style.textareaContainer}>
        <label htmlFor="message" className={style.labelHidden}>
          Treść wiadomości
        </label>
        <textarea name="message" id="message" className={style.textarea} placeholder="Treść wiadomości"></textarea>
        <p className={style.errorMessage} role="alert">
          Invalid input
        </p>
      </div>
      <button type="submit" className={style.btn}>
        Wyślij
      </button>
    </form>
  );
};

export default ContactForm;
