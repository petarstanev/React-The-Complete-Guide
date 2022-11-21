import React, { useState } from "react";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";

function App() {
  const [cart, setCart] = useState([]);

  const handleCartUpdate = (cart) => {
    setCart([...cart]);
  };
  const handleAddMeal = (id, amount, name, price) => {
    let increaseFlag = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        cart[i].amount += amount;
        increaseFlag = true;
      }
    }

    if (!increaseFlag) {
      let meal = { id: id, amount: amount, name: name, price: price };
      cart.push(meal);
    }
    setCart([...cart]);
  };

  return (
    <React.Fragment>
      <Header cart={cart} onCartUpdate={handleCartUpdate} />
      <MealsSummary />
      <AvailableMeals onMealAdd={handleAddMeal} />
    </React.Fragment>
  );
}

export default App;
