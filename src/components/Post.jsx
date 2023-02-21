import classes from "./Post.module.css";

function Post({ author, text}) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>

      <div style={{ color: "red" }}>text:</div>

      <p className={classes.text}>{text}</p>
    </li>
  );
}

export default Post;
