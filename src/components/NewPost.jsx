import {useState} from 'react';

import classes from './NewPost.module.css'

function NewPost() {
  const [newText,setNewText] = useState('');
  function inputHandler(event){
    setNewText(event.target.value);
  }
  return (
  <form className={classes.form}>
   <p>
     <label htmlFor="body">Text</label>
     <textarea id="body" required rows={3} onChange={inputHandler}/>
   </p>
   <p>{newText}</p>
   <p>
     <label htmlFor="name">Your Name</label>
     <input type="text" id="name" />
   </p>

  </form>)
}
export default NewPost;
