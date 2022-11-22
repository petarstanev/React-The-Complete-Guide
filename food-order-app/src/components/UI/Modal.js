import classes from "./Modal.module.css";
import React from "react";
import ReactDom from "react-dom";

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClick}/>;
};

const ModalOverlay = props => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = props => {
  const overlay = document.getElementById('overlay');
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onModalClose}  />,
        overlay
      )}
      {ReactDom.createPortal(<ModalOverlay children={props.children} />, overlay)}
    </React.Fragment>
  );
};

export default Modal;
