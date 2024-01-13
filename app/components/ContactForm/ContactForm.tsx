"use client";
import style from "./ContactForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/app/utils/validation";
import { sendEmail } from "@/app/utils/send-email";
import InputText from "../InputText/InputText";
import FormCheckbox from "../FormCheckbox/FormCheckbox";

export interface FormInput {
  name: string;
  email: string;
  title: string;
  message: string;
  isPermitted: boolean;
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
    // sendEmail(data);
    reset();
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
      <FormCheckbox
        name='isPermitted'
        label='Wyrażam zgodę'
        register={register}
        errors={errors.isPermitted}
      />
      <button type='submit' className={style.btn}>
        Prześlij
      </button>
    </form>
  );
};

export default ContactForm;
