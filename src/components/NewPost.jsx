import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({onInputCancel,onInputSubmit}) {

  const [changeText, setChangeText] = useState("");
  const [changeAuthor, setChangeAuthor] = useState("");

  function onTextHandler(event) {
    setChangeText(event.target.value);
  }
  function onAuthorHandler(event) {
    setChangeAuthor(event.target.value);
  }
  function onSubmitHandler(event) {
    event.preventDefault();
    const manyPosts = {
      text : changeText,
      author : changeAuthor
    }
    onInputSubmit([manyPosts.author,manyPosts.text]);
    onInputCancel();
  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={5} onChange={onTextHandler} />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required onChange={onAuthorHandler}/>
      </p>

      <p className={classes.actions}>
        <button type="button" onClick={onInputCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}
export default NewPost;
