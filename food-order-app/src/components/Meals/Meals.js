import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals onMealAdd={props.onMealAdd} />
    </React.Fragment>
  );
};

export default Meals;
