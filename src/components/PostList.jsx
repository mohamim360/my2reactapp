import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

function PostList() {

  const [changeText, setChangeText] = useState("");
  const [changeAuthor, setChangeAuthor] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(true);
 

  function onTextHandler(event) {
    setChangeText(event.target.value);
  }
  function onAuthorHandler(event) {
    setChangeAuthor(event.target.value);
  }
  function hideModalHandler(event) {
    setModalIsVisible(event.target.value);
  }
  

  return (
    <>
    {
      modalIsVisible ? 
      <Modal onClose={hideModalHandler}>
     <NewPost 
      onInputText={onTextHandler} 
      onInputAuthor={onAuthorHandler} 
     
      />
     </Modal> : null
    }
     
     
      <ul className={classes.posts}>
        <Post author={changeAuthor} text={changeText} />
        <Post author="Hasan" text="hello hamim" />
      </ul>
    </>
  );
}
export default PostList;
