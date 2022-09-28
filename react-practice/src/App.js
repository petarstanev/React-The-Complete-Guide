import { useState } from "react";
import styles from "./App.module.css";

import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";
import Modal from "./components/Modal";

function App() {
  const testUsers = [{ id: 0, age: 33, name: "petar" }];
  const [users, setUsers] = useState(testUsers)
  const [errorMessage, setErrorMesage] = useState();

  const addUser = (name, age) => {
    const user = { id: users.length, name: name, age: age }
    setUsers(oldUsers => [user, ...oldUsers]);
  };

  const showModal = (message) => {
    setErrorMesage(message);
  } 

  const hideModal = () => {
    setErrorMesage("");
  }

  return (
    <div className={styles["app"]}>
      <Modal message={errorMessage} onModalHide ={hideModal}/>
      <AddUserForm onUserAdded={addUser} onShowModal={showModal} />
      <UserList users={users} />
    </div>
  );
}

export default App;
