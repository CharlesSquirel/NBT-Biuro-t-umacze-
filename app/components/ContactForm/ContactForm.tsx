"use client";
import style from "./ContactForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/app/utils/validation";
import { sendEmail } from "@/app/utils/send-email";

export interface FormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    mode: "all",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => sendEmail(data);

  return (
    <form className={style.container} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={style.title}>Napisz do mnie!</h3>
      <div className={style.inputBox}>
        <label htmlFor="name" className={style.labelHidden}>
          Imię
        </label>
        <input type="text" placeholder="Imię" className={style.input} id="name" {...register("name")} />
        <p role="alert" className={style.errorMessage}>
          {errors.name?.message}
        </p>
      </div>
      <div className={style.inputBox}>
        <label htmlFor="email" className={style.labelHidden}>
          Email
        </label>
        <input type="text" placeholder="Email" className={style.input} id="email" {...register("email")} />
        <p role="alert" className={style.errorMessage}>
          {errors.email?.message}
        </p>
      </div>
      <div className={style.textareaContainer}>
        <label htmlFor="message" className={style.labelHidden}>
          {errors.email?.message}
        </label>
        <textarea id="message" className={style.textarea} placeholder="Treść wiadomości" {...register("message")}></textarea>
        <p className={style.errorMessage} role="alert">
          {errors.message?.message}
        </p>
      </div>
      <input type="submit" className={style.btn} />
    </form>
  );
};

export default ContactForm;
