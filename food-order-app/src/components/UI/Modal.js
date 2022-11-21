import classes from "./Modal.module.css";
import React from "react";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}/>;
};

const Dialog = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onModalClose}  />,
        document.getElementById("modal-backdrop")
      )}
      {ReactDom.createPortal(<Dialog children={props.children} />, document.getElementById("modal"))}
    </React.Fragment>
  );
};

export default Modal;
