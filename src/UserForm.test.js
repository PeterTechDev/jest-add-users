import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

// test("it shows two input fields and a submit button", () => {
//   render(<UserForm />);
//   expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
//   expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
//   expect(screen.getByRole("button", { name: /add user/i })).toBeInTheDocument();
// });

test("it shows two input fields and a submit button", () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", () => {
  const onUserAdd = jest.fn();
  render(<UserForm onUserAdd={onUserAdd} />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const button = screen.getByRole("button");

  user.type(nameInput, "John Doe");
  user.type(emailInput, "john@hotmail.com");
  user.click(button);

  expect(onUserAdd).toHaveBeenCalledTimes(1);
  expect(onUserAdd).toHaveBeenCalledWith({
    name: "John Doe",
    email: "john@hotmail.com",
  });
});

test("it clears the inputs after the form is submitted", async () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const button = screen.getByRole("button");

  user.type(nameInput, "Kyrie Irving");
  user.type(emailInput, "uncledrew@hotmail.com");
  await user.click(button);

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
