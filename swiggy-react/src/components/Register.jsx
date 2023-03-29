import {useState} from "react";
import {useNavigate} from 'react-router-dom'
import './Register.css';

function Register(props) {
    const [userData, setUserData] = useState({name: "", email:"", password:""});
    const router = useNavigate();
    // console.log(userData, "userData check here")
    

    function handleSubmit(event){
        event.preventDefault();
        // alert("worked");
        var usersFromDB = JSON.parse(localStorage.getItem('userData')) || [];
        usersFromDB.push(userData);
        localStorage.setItem("userData", JSON.stringify(usersFromDB));
        setUserData({name: "", email:"", password:""});
        router('/Login')
        alert("Registration done!")

    }
    function updatingData(e){
        var name =e.target.name;
        var value= e.target.value;
        setUserData({...userData, [name]:value})
    }
    return (
        <div id="register1">
            <div id="register">
                <div onClick={props.onClose}>X</div>
                <div id="top">
                    <div>
                        <div>Sign up</div>
                        <div>
                            or <a>login to your account</a>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="img" />
                    </div>
                </div>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <label>Name</label><br />
                    <input onChange={updatingData} name='name' value={userData.name} type="text" /><br />
                    <label>Email</label><br />
                    <input onChange={updatingData} name='email' value={userData.email} type="email" /><br />
                    <label>Password</label><br />
                    <input onChange={updatingData} name='password' value={userData.password} type="password" /><br />
                    <button>Have a referral code?</button><br />
                    <input id="input" type="submit" value="REGISTER" />
                    <div>By creating an account, I accept the Terms & Conditions & Privacy Policy</div>

                </form>
            </div>
        </div>
    )
} export default Register;