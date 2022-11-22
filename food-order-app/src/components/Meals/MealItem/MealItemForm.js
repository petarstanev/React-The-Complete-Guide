import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useState } from "react";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);

  const amountChangedCallback = (event) => {
    setAmount(parseInt(event.target.value));
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.onSubmit(amount);
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          value: amount,
          min: "1",
          max: "5",
          onChange: amountChangedCallback,
        }}
      />
      <button onClick={submitForm}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
