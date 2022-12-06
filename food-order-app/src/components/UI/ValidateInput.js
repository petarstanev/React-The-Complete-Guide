import { useState } from "react";
import classes from "./ValidateInput.module.css";

const ValidateInput = (props) => {
  const [textValue, setTextValue] = useState("");
  const [isBlur, setIsBlur] = useState(false);

  const isValid = props.onValidate(textValue);
  const isInvalid = isBlur && !isValid;

  props.onValid(isValid);

  const textChangeHandler = (event) => {
    setTextValue(event.target.value);
  };

  const blurChangeHandler = () => {
    setIsBlur(true);
  };

  const cssClass = isInvalid
    ? `${classes.input} ${classes.invalid}`
    : classes.input;

  return (
    <div className={cssClass}>
      <label htmlFor={props.id}>{props.name}</label>
      <input
        id={props.id}
        type={props.type}
        onChange={textChangeHandler}
        onBlur={blurChangeHandler}
      />
      {isInvalid && <p>Please fill field</p>}
    </div>
  );
};

export default ValidateInput;