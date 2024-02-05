'use client';
import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import style from './ContactForm.module.scss';
import InputText from '@/components/InputText/InputText';
import FormCheckbox from '@/components/FormCheckbox/FormCheckbox';
import ModalEmail from '../ModalEmail/ModalEmail';
import { validationSchema } from 'utils/validation';
import { sendEmail } from 'utils/send-email';
import { useEscapeClick } from 'utils/hooks/useEscapeClick';
import ReCAPTCHA from 'react-google-recaptcha';

export interface FormInput {
  name: string;
  email: string;
  title: string;
  message: string;
  isPermitted: boolean;
  captcha?: string | undefined;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormInput>({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  });

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  useEscapeClick(() => setShowModal(false));

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      const captcha = await recaptchaRef.current?.executeAsync();

      if (captcha) {
        await setValue('captcha', captcha);
      }

      const response = await sendEmail(data);
      
      // zatrzymanie kodu, gdyby backend rzucił blędem
      if (!response.success) {
        console.log("zatrzymanie")
        return;
      }
      else {
        sendEmail(data)
        handleShowModal();
        reset();
      }

    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <form className={style.container} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={style.title}>Napisz do mnie!</h3>
      <InputText name="name" label="Imię" register={register} errors={errors.name} />
      <InputText name="email" label="Email" register={register} errors={errors.email} />
      <InputText name="title" label="Tytuł" register={register} errors={errors.title} />
      <InputText isTextArea name="message" label="Treść wiadomości" register={register} errors={errors.message} />
      <FormCheckbox name="isPermitted" label="Wyrażam zgodę" register={register} errors={errors.isPermitted} />
      <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={process.env.NEXT_PUBLIC_RECAPTCHA!} />
      <button type="submit" className={style.btn}>
        Prześlij
      </button>
      {showModal && <ModalEmail onClose={handleShowModal} />}
    </form>
  );
};

export default ContactForm;
