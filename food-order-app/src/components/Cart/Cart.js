import React from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  let totalPrice = 0;
  for (let i = 0; i < props.cart.length; i++) {
    totalPrice += props.cart[i].price * props.cart[i].amount;
  }

  const handleChangeAmount = (id, value) => {
    for (let i = 0; i < props.cart.length; i++) {
      if (id === props.cart[i].id) {
        props.cart[i].amount += value;
        if (props.cart[i].amount === 0) {
          props.cart.splice(i, 1);
        }
      }
    }
    props.onCartUpdate(props.cart);
  };

  const handleOrder = () => {
    console.log("Order");
  };

  return (
    <React.Fragment>
      <div className={classes["cart-items"]}>
        {props.cart.map((item) => (
          <CartItem
            id={item.id}
            key={item.id}
            amount={item.amount}
            summary={item.summary}
            name={item.name}
            price={item.price}
            onChangeAmount={handleChangeAmount}
          />
        ))}
      </div>
      <div className={classes.total}>
        <h2>Total Amount</h2>
        <h2>${totalPrice.toFixed(2)}</h2>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onModalClose}>
          Close
        </button>
        <button className={classes.button} onClick={handleOrder}>
          Order
        </button>
      </div>
    </React.Fragment>
  );
};

export default Cart;
