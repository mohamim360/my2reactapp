/* eslint-disable no-unused-vars */
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

function PostList({ isVisible, onStopPosting }) {
  const [changeText, setChangeText] = useState("");
  const [changeAuthor, setChangeAuthor] = useState("");

  

  const [cnts, setCnts] = useState([]);

  function onTextHandler(event) {
    setChangeText(event.target.value);
  }
  function onAuthorHandler(event) {
    setChangeAuthor(event.target.value);
  }
  function onSetPostHandler(event) {
    event.preventDefault();
   
    setCnts((prev) => [0, ...prev]);
    onStopPosting();
  }

  return (
    <>
      {isVisible ? (
        <Modal onClose={onStopPosting}>
          <NewPost
            onInputText={onTextHandler}
            onInputAuthor={onAuthorHandler}
            onInputCancel={onStopPosting}
            onInputSumit={onSetPostHandler}
          />
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        {
          cnts.map( cnt => 
           ( <Post author={changeAuthor} text={changeText} />)
          )}
      </ul>
    </>
  );
}
export default PostList;
