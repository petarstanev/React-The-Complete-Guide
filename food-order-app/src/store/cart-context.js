import React, { useState } from "react";

export const CartContext = React.createContext({
  cart: [],
  onItemAdded: () => {},
  onItemRemove: () => {},
});

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const itemAddedHandler = (meal) => {
    let increaseFlag = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === meal.id) {
        cart[i].amount += meal.amount;
        increaseFlag = true;
      }
    }
    if (!increaseFlag) {
      cart.push(meal);
    }
    setCart([...cart]);
  };
  const itemAmountChangedHandler = (id, value) => {
    for (let i = 0; i < cart.length; i++) {
      if (id === cart[i].id) {
        cart[i].amount += value;
        if (cart[i].amount === 0) {
          cart.splice(i, 1);
        }
      }
    }
    setCart([...cart]);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        onItemAdded: itemAddedHandler,
        onAmountChanged: itemAmountChangedHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
