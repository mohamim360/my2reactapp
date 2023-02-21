/* eslint-disable no-unused-vars */
import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
    
  }
  function showModalHandler() {
    setModalIsVisible(true);
    
  }
  
  return (
    <>
    <MainHeader onCreatePosting={showModalHandler}/>
    <main>
      <PostList isVisible={modalIsVisible} onStopPosting={hideModalHandler}/>
    </main>
    </>
    
  )
  

}

export default App;