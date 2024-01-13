import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ContactForm, { FormInput } from "./ContactForm";
import { sendEmail } from "@/app/utils/send-email";

const mockedSubmit = jest.fn(sendEmail).mockImplementation((data: FormInput) => console.log(data));

it("prevent submitting when all inputs are empty", () => {
  render(<ContactForm />);
  const inputs = screen.getAllByRole("textbox");

  //expect 4 inputs in the form
  expect(inputs.length).toEqual(4);

  //all of inputs should be empty by default
  inputs.forEach((input) => {
    expect(input).toHaveValue("");
  });

  const btnSubmit = screen.getByRole("button", { name: "Prześlij" });
  fireEvent.click(btnSubmit);

  //after submiting an empty form onSubmit should not be called
  expect(mockedSubmit).not.toHaveBeenCalled();
});

it("properly handle required input validation", async () => {
  render(<ContactForm />);
  fireEvent.submit(screen.getByRole("button"));
  expect(await screen.findAllByRole("alert")).toHaveLength(4);
  expect(mockedSubmit).not.toHaveBeenCalled();
});
