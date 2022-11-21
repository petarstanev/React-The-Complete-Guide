import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const handleSubmit = (amount)=>{
    props.onSubmit(props.id,amount,props.name,props.price)
  }

  return (
    <div className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <MealItemForm onSubmit={handleSubmit}/>
    </div>
  );
};

export default MealItem;
