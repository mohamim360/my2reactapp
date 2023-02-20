const arrayName = ["hamim", "hasan"];

function Post() {
  const randomName = Math.random() > 0.5 ? arrayName[0] : arrayName[1];

  return (
    <div>
      <p>{randomName}</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

export default Post;
