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
