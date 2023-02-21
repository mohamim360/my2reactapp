import classes from "./NewPost.module.css";

function NewPost({onInputText,onInputAuthor,onInputCancel,onInputSumit}) {
  return (
    <form className={classes.form} onSubmit={onInputSumit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={5} onChange={onInputText} />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required onChange={onInputAuthor}/>
      </p>

      <p className={classes.actions}>
        <button type="button" onClick={onInputCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}
export default NewPost;
