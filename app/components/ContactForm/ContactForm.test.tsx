import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ContactForm, { FormInput } from "./ContactForm";
import { sendEmail } from "@/app/utils/send-email";

// Mock the entire module
jest.mock("../../utils/send-email");

// Now you can access the mock functions in the dataModule object
const mockedSubmit = jest.fn(sendEmail).mockImplementation((data: FormInput) => {
  console.log(data);
});

// const mockedSubmit = jest.spyOn(dataModule, "sendEmail").mockImplementation((data: FormInput) => {
//   console.log(data);
// });

// const mockedSubmit = jest.fn(sendEmail);
//   .mockImplementation((data: FormInput) => Promise.resolve(console.log(data)));

const mockedInputs = {
  name: {
    valid: "Johny",
    invalid: "J_ohn6",
  },
  email: {
    valid: "johny@test.pl",
    invalid: "johny",
  },
  title: "test",
  message: "test",
  isPermitted: {
    valid: true,
    invalid: false,
  },
};

beforeEach(() => {
  render(<ContactForm />);
});

it("prevent submitting when all inputs are empty", () => {
  const inputs = screen.getAllByRole("textbox");

  //expect 4 inputs in the form
  expect(inputs.length).toEqual(4);

  //all of inputs should be empty by default
  inputs.forEach((input) => {
    expect(input).toHaveValue("");
  });

  expect(screen.getByRole("checkbox")).not.toBeChecked();

  const btnSubmit = screen.getByRole("button", { name: "Prześlij" });
  fireEvent.click(btnSubmit);

  //after submiting an empty form onSubmit should not be called
  expect(mockedSubmit).not.toHaveBeenCalled();
});

it("properly handle required input validation", async () => {
  fireEvent.submit(screen.getByRole("button"));
  expect(await screen.findAllByRole("alert")).toHaveLength(5);
  expect(mockedSubmit).not.toHaveBeenCalled();
});

it("should display error when name or email input is invalid", async () => {
  const inputName = screen.getByRole("textbox", { name: "Imię" });
  const inputEmail = screen.getByRole("textbox", { name: "Email" });

  fireEvent.input(inputName, {
    target: {
      value: mockedInputs.name.invalid,
    },
  });

  fireEvent.input(inputEmail, {
    target: {
      value: mockedInputs.email.invalid,
    },
  });

  expect(screen.getByRole("checkbox")).not.toBeChecked();

  fireEvent.submit(screen.getByRole("button"));
  expect(await screen.findAllByRole("alert")).toHaveLength(5);
  expect(mockedSubmit).not.toHaveBeenCalled();
  expect(inputName).toHaveValue(mockedInputs.name.invalid);
  expect(inputEmail).toHaveValue(mockedInputs.email.invalid);
});

it("should not display any error when all inputs are valid", async () => {
  const inputName = screen.getByRole("textbox", { name: "Imię" });
  const inputEmail = screen.getByRole("textbox", { name: "Email" });
  const inputTitle = screen.getByRole("textbox", { name: "Tytuł" });
  const inputMessage = screen.getByRole("textbox", { name: "Treść wiadomości" });
  await waitFor(() => {
    fireEvent.input(inputName, {
      target: {
        value: mockedInputs.name.valid,
      },
    });

    fireEvent.input(inputEmail, {
      target: {
        value: mockedInputs.email.valid,
      },
    });

    fireEvent.input(inputTitle, {
      target: {
        value: mockedInputs.title,
      },
    });

    fireEvent.input(inputMessage, {
      target: {
        value: mockedInputs.message,
      },
    });

    fireEvent.submit(screen.getByRole("button"));
    fireEvent.click(screen.getByRole("checkbox"));
  });
  expect(screen.queryAllByRole("alert")).toHaveLength(0);
  //   expect(mockedSubmit).toHaveBeenCalledWith({
  //     name: mockedInputs.name.valid,
  //     email: mockedInputs.email.valid,
  //     title: mockedInputs.title,
  //     message: mockedInputs.message,
  //   });
  // expect(inputName).toHaveValue("");
  // expect(inputEmail).toHaveValue("");
  // expect(inputTitle).toHaveValue("");
  // expect(inputMessage).toHaveValue("");
  // expect(screen.getByRole("checkbox")).not.toBeChecked();
});
