import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login(props) {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const router = useNavigate();
  

  function loginSubmit(event) {
    event.preventDefault();
    var dataFromLS = JSON.parse(localStorage.getItem("userData"));
    dataFromLS.push(userData);
   

    var flag = false;
    for (var i = 0; i < dataFromLS.length; i++) {
      if (
        dataFromLS[i].email === userData.email &&
        dataFromLS[i].password === userData.password
      )
        flag = true;
    }
    if (flag === true) {
      setUserData({ email: "", password: "" });
      var user = {};
      user["current-user-email"] = userData.email;
      localStorage.setItem("current-user", JSON.stringify(user));
      router('/Effect')
      alert("Login Done...");
      
    } else {
      alert("please check credential");
    }
  }
  function updatingData(e) {
    var name = e.target.name;
    var value = e.target.value;
    setUserData({ ...userData, [name]: value });
  
  }

  return (
    <div id="login1">
            <div id="register">
                <div onClick={props.onClose}>X</div>
                <div id="top">
                    <div>
                        <div>Login</div>
                        <div>
                            or <a>create an account</a>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="img" />
                    </div>
                </div>
                <form onSubmit={(event) => loginSubmit(event)}>
                    <label>Email</label><br />
                    <input onChange={updatingData} name='email' value={userData.email} type="email" /><br />
                    <label>Password</label><br />
                    <input onChange={updatingData} name='password' value={userData.password} type="password" /><br />
                    <input id="input" type="submit" value="LOGIN" />
                    <div>By creating an account, I accept the Terms & Conditions & Privacy Policy</div>

                </form>
            </div>
        </div>
  );
}

export default Login;