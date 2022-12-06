import React from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const handleOrder = () => {
    console.log("Order");
    props.onOrder();
  };

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  return (
    <Modal onModalClose={props.onModalClose}>
      <div className={classes["cart-items"]}>
        {cartContext.items.map((item) => (
          <CartItem
            key={item.id}
            amount={item.amount}
            summary={item.summary}
            name={item.name}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onModalClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={handleOrder}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
