import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("render one row for each user", () => {
  const users = [
    { name: "John Doe", email: "john@hotmail.com" },
    { name: "Jane Doe", email: "jane@hotmail.com" },
  ];

  render(<UserList users={users} />);
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  expect(rows).toHaveLength(users.length);
});

test("render the name and email of each user", () => {});
