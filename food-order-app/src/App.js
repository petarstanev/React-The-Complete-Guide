import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import OrderForm from "./components/Cart/OrderForm";
import CartProvider from "./store/cart-provider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [orderFormIsShown, setOrderFormIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const showOrderFormHandler = () => {
    setCartIsShown(false);
    setOrderFormIsShown(true);
  };

  const hideOrderFormHandler = () => {
    setOrderFormIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onModalClose={hideCartHandler} onOrder={showOrderFormHandler} />}
      {orderFormIsShown && <OrderForm onModalClose={hideOrderFormHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
