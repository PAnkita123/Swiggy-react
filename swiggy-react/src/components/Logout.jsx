import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { useToaster } from 'react-hot-toast/headless';

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  console.log(currentUser);
  const router= useNavigate();
//   const { success } = useToaster();


  useEffect(() => {
    var currentUserFromLS = JSON.parse(localStorage.getItem("current-user"));
    console.log(currentUserFromLS, "hi");
    if (currentUserFromLS) {
      setCurrentUser(true);

    }
  }, [])

  function logout(){
    localStorage.removeItem('current-user');
    alert('logout successful!')
    setCurrentUser(false);
  }


  return (
    <>
      <div>
        <button onClick = {() => toast.success('working!')}>Test</button>
        {currentUser ? <button onClick={logout}>Logout</button> : <button onClick={() => router('/Login')}>Login</button>}
      </div>
    </>
  );
}
export default App;
