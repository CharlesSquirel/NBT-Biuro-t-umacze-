"use client";
import { FieldError } from "react-hook-form";
import globalStyle from "../../style/Globals.module.scss";
import style from "./InputText.module.scss";
import React from "react";

interface InputProps {
  name: string;
  errors?: FieldError;
  label: string;
  register: any;
  isTextArea?: boolean;
}

const InputText: React.FC<InputProps> = ({ name, errors, label, register, isTextArea }) => {
  return (
    <div className={`${isTextArea ? style.textareaContainer : style.inputBox}`}>
      <label htmlFor={name} className={globalStyle.labelHidden}>
        {label}
      </label>
      {isTextArea ? (
        <textarea
          aria-label={label}
          id={name}
          className={style.textarea}
          placeholder={label}
          {...register(`${name}`)}
          autoComplete='off'
        ></textarea>
      ) : (
        <input
          aria-label={label}
          type='text'
          placeholder={label}
          className={style.input}
          id={name}
          {...register(`${name}`)}
          autoComplete='off'
        />
      )}
      {errors && (
        <p role='alert' className={globalStyle.errorMessage}>
          {errors?.message}
        </p>
      )}
    </div>
  );
};

export default InputText;
