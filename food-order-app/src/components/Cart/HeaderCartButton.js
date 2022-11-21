import CartIcon from "./CartIcon";
import Cart from "./Cart";
import Modal from "../UI/Modal";
import classes from "./HeaderCartButton.module.css";
import React, { useState } from "react";

const HeaderCartButton = (props) => {
  const [isModalVisible, setShowModal] = useState(false);

  const showModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  let totalAmount = 0;
  for (let i = 0; i < props.cart.length; i++) {
    totalAmount += props.cart[i].amount;
  }

  return (
    <React.Fragment>
      <div className={classes.bump}>
        <div className={classes.button} onClick={showModal}>
          <div className={classes.icon}>
            <CartIcon />
          </div>
          Your Cart
          <div className={classes.badge}>{totalAmount}</div>
        </div>
      </div>
      {isModalVisible ? (
        <Modal onModalClose={handleCloseModal}>
          <Cart
            cart={props.cart}
            onModalClose={handleCloseModal}
            onCartUpdate={props.onCartUpdate}
          />
        </Modal>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default HeaderCartButton;
