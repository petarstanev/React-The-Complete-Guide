import Modal from "../UI/Modal";
// import ValidateInput from "../UI/ValidateInput";
import useInput from "../../hooks/use-input";
import classes from "./OrderForm.module.css";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

const OrderForm = (props) => {
  const context = useContext(CartContext);
  const [orderNumber, setOrder] = useState('');

  const isNotEmpty = (x) => {
    return x.trim() !== "";
  };

  const sendRequest = async (order) => {
    const response = await fetch(
      "https://react-http-6161a-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order)
      }
    );

      const data = await response.json();

    if (response.ok) {
        setOrder(data.name);
        context.clearItems();
    }
  };

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: addressValue,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput(isNotEmpty);

  const formIsValid = firstNameIsValid && lastNameIsValid && addressIsValid;

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const order = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      address: addressValue,
      items: context.items,
    };
    
    sendRequest(order);

    resetFirstName();
    resetLastName();
    resetAddress();
  };

  const firstNameClasses = firstNameHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : `${classes["form-control"]};`;
  const lastNameClasses = lastNameHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : `${classes["form-control"]};`;
  const addressClasses = addressHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : `${classes["form-control"]};`;

  return (
    <Modal onModalClose={props.onModalClose}>
      <p>Order form</p>
      <form onSubmit={submitFormHandler}>
        <div className={firstNameClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">Please enter a first name.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Please enter a last name.</p>
          )}
        </div>
        <div className={addressClasses}>
          <label htmlFor="adress">Address</label>
          <input
            type="text"
            id="adress"
            value={addressValue}
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
          />
          {addressHasError && (
            <p className="error-text">Please enter an address.</p>
          )}
        </div>
        <button disabled={!formIsValid}>Submit Order</button>
        {orderNumber && <p>Your order is: {orderNumber}</p>}
      </form>
    </Modal>
  );
};

export default OrderForm;
