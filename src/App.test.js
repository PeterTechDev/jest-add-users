import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can receive a new user and display it on a list", async () => {
  render(<App />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const button = screen.getByRole("button");

  user.type(nameInput, "LeBron James");
  user.type(emailInput, "lebron@goat.com");

  await user.click(button);

  const name = screen.getByText("LeBron James");
  const email = screen.getByText("lebron@goat.com");

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
