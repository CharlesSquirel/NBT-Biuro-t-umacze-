"use client";
import style from "./ContactForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "utils/validation";
import { sendEmail } from "utils/send-email";
import InputText from "@/components/InputText/InputText";
import FormCheckbox from "@/components/FormCheckbox/FormCheckbox";
import ModalEmail from "../ModalEmail/ModalEmail";
import { useState } from "react";
import { useEscapeClick } from "utils/hooks/useEscapeClick";

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

  const [showModal, setShowModal] = useState(true);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  useEscapeClick(handleShowModal);

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
