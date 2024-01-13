"use client";
import style from "./ContactForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/app/utils/validation";
import { sendEmail } from "@/app/utils/send-email";
import InputText from "../InputText/InputText";

export interface FormInput {
  name: string;
  email: string;
  title: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInput>({
    mode: "all",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
    reset();
    // sendEmail(data);
  };

  return (
    <form className={style.container} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={style.title}>Napisz do mnie!</h3>
      <InputText name='name' label='Imię' register={register} errors={errors.name} />
      <InputText name='email' label='Email' register={register} errors={errors.email} />
      <InputText name='title' label='Tytuł' register={register} errors={errors.title} />
      <InputText
        isTextArea
        name='message'
        label='Treść wiadomości'
        register={register}
        errors={errors.message}
      />
      <button type='submit' className={style.btn}>
        Prześlij
      </button>
    </form>
  );
};

export default ContactForm;
