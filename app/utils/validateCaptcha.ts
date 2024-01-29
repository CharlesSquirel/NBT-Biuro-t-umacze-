export const validateCaptcha = async (captcha: string) => {
  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
      {
        method: "POST",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      }
    );

    if (!response.ok) {
      throw new Error("Server returnes" + response.status);
    }

    const captchaValidation = await response.json();
    return captchaValidation;
  } catch (error) {
    console.error("There is problem with" + error);
  }
};
