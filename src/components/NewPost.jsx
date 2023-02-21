import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={5} onChange={props.onInputText} />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required onChange={props.onInputAuthor}/>
      </p>
    </form>
  );
}
export default NewPost;
