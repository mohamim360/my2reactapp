/* eslint-disable no-unused-vars */
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

function PostList({ isVisible, onStopPosting }) {
  
  const [posts, setPosts] = useState([]);
  function onPostHandler(posts) {
    setPosts((prev) => [posts, ...prev]);
  }

  return (
    <>
      {isVisible ? (
        <Modal onClose={onStopPosting}>
          <NewPost onInputCancel={onStopPosting} 
          onInputSubmit={onPostHandler}/>
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        {posts.map((cnt) => (
          <Post author={cnt[0]} text={cnt[1]} />
        ))}
      </ul>
    </>
  );
}
export default PostList;
