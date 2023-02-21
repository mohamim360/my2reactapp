 
import classes from './Modal.module.css';
import { useState } from "react";

function Modal({children}){
  const [modalIsVisible, setModalIsVisible] = useState(true);
  function hideModalHandler(event) {
    setModalIsVisible(event.target.value);
  }
return(
  <>
  <div className={classes.backdrop} onClick={hideModalHandler} />
  
  <dialog open={modalIsVisible} className={classes.modal}>
   {children}
  </dialog>
  </>
 
)
}
export default Modal;
