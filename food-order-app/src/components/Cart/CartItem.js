import { CartContext } from "../../store/cart-context";
import classes from "./CartItem.module.css";
import { useContext } from "react";

const CartItem = props => {
  const cartContext = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const handleAddItem = () => {
    cartContext.onAmountChanged(props.id, 1);
  };
  const handleRemoveItem = () => {
    cartContext.onAmountChanged(props.id, -1);
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={handleRemoveItem}>−</button>
        <button onClick={handleAddItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
