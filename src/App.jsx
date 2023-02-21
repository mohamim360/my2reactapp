import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler(event) {
    setModalIsVisible(false);
  }
  function showModalHandler(event) {
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