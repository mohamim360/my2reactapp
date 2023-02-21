 
import classes from './Modal.module.css';
import { useState } from "react";

function Modal({children}){
  const [modalIsVisible, setModalIsVisible] = useState(true);
  function hideModalHandler(event) {
    setModalIsVisible(event.target.value);
  }
return(
  <>
 {
    modalIsVisible && <>
    <div className={classes.backdrop} onClick={hideModalHandler} />
    
    <dialog open className={classes.modal}>
     {children}
    </dialog>
    </>
  }
  </>
 
  
 
)
}
export default Modal;
