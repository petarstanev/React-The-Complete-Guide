import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import React from "react";

const HeaderCartButton = (props) => {
  let totalAmount = 0;
  for (let i = 0; i < props.cart.length; i++) {
    totalAmount += props.cart[i].amount;
  }

  return (
    <React.Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{totalAmount}</span>
      </button>     
    </React.Fragment>
  );
};

export default HeaderCartButton;
