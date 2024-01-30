import { FormInput } from "@/components/ContactForm/ContactForm";

export const sendEmail = (data: FormInput) => {
  const apiEndpoint = '/api/email';

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        return { success: false, message: 'Email sent unsuccessfully' };
      }
      return res.json();
    })
    .then(() => {
      return { success: true, message: 'Email sent successfully' };
    })
    .catch((err) => {
      console.error("Error sending email:", err);
      return { success: false, message: "Error sending email: " + err.message };
    });
};
