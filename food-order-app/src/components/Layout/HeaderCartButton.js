import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import React, { useContext } from "react";
import { CartContext } from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  let totalAmount = 0;
  for (let i = 0; i < cartContext.cart.length; i++) {
    totalAmount += cartContext.cart[i].amount;
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
