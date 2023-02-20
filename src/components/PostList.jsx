import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
function PostList() {
  return (
    <>
    <NewPost/>
      <ul className={classes.posts}>
        <Post author="Hamim" text="hello hasan" />
        <Post author="Hasan" text="hello hamim" />
      </ul>
    </>
  );
}
export default PostList;
