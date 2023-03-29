import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import Register from './Register.jsx'
import Login from './Login.jsx'
import './home.css';

function Home() {
    const [showSignUpPage, setShowSignUpPage] = useState(false);
    const [showLoginPage, setShowLoginPage] = useState(false);

    function display(value) {
        if (value === 'register') {
            setShowSignUpPage(true);
            setShowLoginPage(false);
        }
        else {
            setShowLoginPage(true);
            setShowSignUpPage(false);
        }

    }
    function closePage(value) {
        if(value === 'register'){
          setShowSignUpPage(false);
        }
        else{
          setShowLoginPage(false);
        }
        
      }



  return(
    <>
     {showSignUpPage && <Register onClose={() => closePage('register')} />}
    {showLoginPage && <Login onClose={() => closePage('login')} />}
      <div id="home">
        <div id="left-side">
          <div id="left-side1">
            <div><img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png" alt="image1" /></div>
            <div>
              <button onClick={() => display('login')} id="login">
                Login
              </button>
              <div id="login-page" className="hidden">
                {/* <form>
                  <a id="close" href="#">
                    ×
                  </a>
                  <h1>Login</h1>
                  <small>or</small> <a href="./login.html">create an account</a>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" />
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" />
                  <input id="submit" type="submit" value="Login" />
                </form> */}
            </div>
              <button onClick={() => display ('register')} id="signup">
                Sign up
              </button>
            <div id="signup-page" className="hidden">
                {/* <form>
                  <a id="close2" href="#">
                    ×
                  </a>
                  <h1>Sign up</h1>
                  <small>or</small> <a href="./login.html">create an account</a>
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" />
                  <label htmlFor="email">Email Id</label>
                  <input type="email" id="userEmail" />
                  <label htmlFor="password">Password</label>
                  <input type="password" id="userPassword" />
                  <input onClick={() => {}} id="submit" type="submit" value="Sign up" />
                </form> */}
            </div>
            </div>
          </div>
          <div>
            <h1>Cooking gone wrong?</h1>
            <p>Order food from favourite restaurants near you.</p>
          </div>
          <div>
            <input placeholder="Enter your delivery location" />
            <button>Find Food</button>
          </div>
          <div>
            <p>POPULAR CITIES IN INDIA</p>
            <p>Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai Pune &amp; more.</p>
          </div>
        </div>  
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" /></div>
    </div>
    <div id="home-2">
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" />
            <h3>No Minimum Order</h3>
            <p>Order in for yourself or for the group, with no restrictions on order value
            </p>
        </div>
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" />
            <h3>Live Order Tracking</h3>
            <p>Know where your order is at all times, from the restaurant to your doorstep
            </p>
        </div>
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" />
            
            <h3>Lightning-Fast Delivery
            </h3>
            <p>Experience Swiggy's superfast delivery for food delivered fresh & on time</p>
        </div>


    </div>
     

    </> 
 )
} 
export default Home;