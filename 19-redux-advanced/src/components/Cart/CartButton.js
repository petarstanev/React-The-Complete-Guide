import classes from "./CartButton.module.css";
import { menuActions } from "../../store/menu";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const totalItems = items.reduce((state,item)=>{return state+item.quantity},0);

  const clickHandler = () => dispatch(menuActions.changeVisible());
  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
