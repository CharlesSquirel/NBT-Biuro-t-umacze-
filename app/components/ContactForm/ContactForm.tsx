"use client";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import style from "./ContactForm.module.scss";
import InputText from "@/components/InputText/InputText";
import FormCheckbox from "@/components/FormCheckbox/FormCheckbox";
import ModalEmail from "../ModalEmail/ModalEmail";
import { validationSchema } from "utils/validation";
import { sendEmail } from "utils/send-email";
import { useEscapeClick } from "utils/hooks/useEscapeClick";
import ReCAPTCHA from "react-google-recaptcha";

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

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  useEscapeClick(() => setShowModal(false));

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    handleShowModal();
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
      {showModal && <ModalEmail onClose={handleShowModal} />}
    </form>
  );
};

export default ContactForm;
