import { useState } from "react";

const useInputa = (validation) => {
  const [text, setText] = useState("");
  const [isBlur, setIsBlur] = useState(false);

  const isValid = validation(text);
  const isFormInvalid = isBlur && !isValid;

  const textChangedHandler = (event) => {
    setText(event.target.value);
  };

  const blurChangedHandler = (event) => {
    setIsBlur(true);
  };

  const reset = ()=> {
    setText('');    
    setIsBlur(false);
  }

  return {
    text,
    isValid,
    isFormInvalid,
    textChangedHandler,
    blurChangedHandler,
    reset,
  };
};

export default useInputa;
