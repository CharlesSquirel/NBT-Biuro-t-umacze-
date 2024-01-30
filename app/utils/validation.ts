import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .required("To pole jest wymagane")
    .matches(/^[a-zA-Z\s]+$/gi, "Imię nie powinno zawierać cyfr ani znaków specjalnych"),
  email: Yup.string().required("To pole jest wymagane").email("Niepoprawny email"),
  title: Yup.string().required("To pole jest wymagane"),
  message: Yup.string().required("To pole jest wymagane"),
  isPermitted: Yup.boolean().oneOf([true], "Pole jest wymagane").required("To pole jest wymagane"),
  captcha: Yup.string()
});
