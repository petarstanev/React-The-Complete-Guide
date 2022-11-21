import React from 'react'
import HeaderCartButton from "../Cart/HeaderCartButton";
import classes from "./Header.module.css";
import mealsImage from './meals.jpg';

const Header = (props) => {
  return (
      <React.Fragment>
      <div className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton cart={props.cart} onCartUpdate={props.onCartUpdate}/>
      </div>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt='meals' />
      </div>
    </React.Fragment>
  );
};

export default Header;
