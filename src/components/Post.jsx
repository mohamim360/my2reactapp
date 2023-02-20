import classes from "./Post.module.css";

function Post(props) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <div style={{ color: "red" }}>text:</div>
      <p className={classes.text}>{props.text}</p>
    </li>
  );
}

export default Post;
