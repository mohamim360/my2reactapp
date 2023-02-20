import classes from "./Post.module.css";

function Post(props) {
  return (
    <div className={classes.post}>
      
      <p className={classes.author}>{props.author}</p>
      <div style={{ color: "red" }}>
        text:
      </div>
      <p className={classes.text}>{props.text}</p>
    </div>
  );
}

export default Post;
