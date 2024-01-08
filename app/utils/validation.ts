import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .required("To pole jest wymagane")
    .matches(/^[a-zA-Z]+$/gi, "Imię nie powinno zawierać cyfr ani znaków specjalnych"),
  email: Yup.string().required("To pole jest wymagane").email("Niepoprawny email"),
  title: Yup.string().required("To pole jest wymagane"),
  message: Yup.string().required("To pole jest wymagane"),
});
