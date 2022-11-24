import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useState, useRef } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          defaultValue: 1,
          min: "1",
          max: "5",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter value 1 to 5</p>}
    </form>
  );
};

export default MealItemForm;
