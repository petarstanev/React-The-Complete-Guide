import { useState } from "react";
import styles from "./AddUserForm.module.css";

const AddUserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const addUser = (event) => {
    event.preventDefault();
    if (!isValidInput(name, age)) {
      props.onShowModal("Please enter a valid name and age. (Non empty values)");
    } else if (!isValidAge(age)) {
      props.onShowModal("Please enter a valid age. (positive value)");
    } else {
      props.onUserAdded(name, age);
      setName("");
      setAge("");
    }
  };

  const isValidInput = (name, age) => name.length > 0 && age.length > 0;
  const isValidAge = (age) => {
    const ageInt = parseInt(age);
    return ageInt > -1;
  };

  return (
    <form className={styles.form}>
      <h2>Username</h2>
      <input type="text" onChange={changeNameHandler} value={name}></input>
      <h2>Age (Years)</h2>
      <input type="number" onChange={changeAgeHandler} value={age}></input>
      <button type="submit" onClick={addUser} className={styles.submit}>
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
