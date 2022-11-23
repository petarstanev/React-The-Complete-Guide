import React from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import { CartContext } from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  let totalPrice = 0;
  for (let i = 0; i < cartContext.cart.length; i++) {
    totalPrice += cartContext.cart[i].price * cartContext.cart[i].amount;
  }

  const handleOrder = () => {
    console.log("Order");
  };

  return (
    <Modal onModalClose={props.onModalClose}>
      <div className={classes["cart-items"]}>
        {cartContext.cart.map((item) => (
          <CartItem
            id={item.id}
            key={item.id}
            amount={item.amount}
            summary={item.summary}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onModalClose}>
          Close
        </button>
        <button className={classes.button} onClick={handleOrder}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
