interface ContactProps {
  addressPrimary: string;
  addressSecondary: string;
  nip: string;
  regon?: string;
  phone: string;
  email: string;
}

export const contactInfo: ContactProps[] = [
  { addressPrimary: "ul. Strzeszewskiego 25/23", addressSecondary: "20-153 Lublin", nip: "712-246-78-95", regon: "060567875", phone: "516 169 233", email: "nbt.tlumaczenia@gmail.com" },
];
