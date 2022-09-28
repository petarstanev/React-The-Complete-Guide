import style from "./Modal.module.css";

const Modal = (props) => {
  const visible = props.message && props.message.length > 0;

  const hideModal = () => {
    props.onModalHide();
  };

  return (
    <div
      className={visible ? style["modal"] : style["hidden"]}
      onClick={hideModal}
    >
      <div className={style["dialog"]}>
        <div className={style["title"]}>Invalid input</div>
        <div className={style["description"]}>{props.message}</div>
      </div>
    </div>
  );
};

export default Modal;
