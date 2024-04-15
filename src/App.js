import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div>
      <h1>User Form</h1>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <h1>Users</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
