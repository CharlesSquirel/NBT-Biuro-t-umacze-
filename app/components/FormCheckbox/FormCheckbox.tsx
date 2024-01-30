import { FieldError } from "react-hook-form";
import style from "./FormCheckbox.module.scss";
import globalStyle from "style/Globals.module.scss";

interface CheckboxProps {
  name: string;
  errors?: FieldError;
  label: string;
  register: any;
}

const FormCheckbox: React.FC<CheckboxProps> = ({ name, label, register, errors }) => {
  return (
    <div className={style.container}>
      <div className={style.checkboxRow}>
        <input
          className={style.checkbox}
          type='checkbox'
          id={name}
          aria-labelledby='Wyrażenie zgody na przetwarzanie danych osobowych'
          aria-describedby='description'
          {...register("isPermitted")}
        />
        <label htmlFor={name}>{label}</label>
        {errors && (
          <p role='alert' className={globalStyle.errorMessage}>
            {errors?.message}
          </p>
        )}
      </div>
      <p className={style.privacyInfo} id='description'>
        na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych osobowych w
        związku z wysłaniem zapytania przez formularz kontaktowy. Podanie danych jest dobrowolne,
        ale niezbędne do przetworzenia zapytania. Oświadczam, że zostałem/am poinformowany/a, że
        przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, żądania
        zaprzestania ich przetwarzania.
      </p>
    </div>
  );
};

export default FormCheckbox;
