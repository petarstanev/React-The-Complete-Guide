import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

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
      {cartIsShown && (
        <Cart
          // cart={props.cart}
          cart={[{id:1,price:1.6,amount:2,summary:'summary',name:'name'}]}
          onModalClose={hideCartHandler}
          // onCartUpdate={props.onCartUpdate}
        />
      )}
      <Header cart={cart} onShowCart={showCartHandler} onCartUpdate={handleCartUpdate} />
      <main>
        <Meals onMealAdd={handleAddMeal} />
      </main>
    </React.Fragment>
  );
}

export default App;
