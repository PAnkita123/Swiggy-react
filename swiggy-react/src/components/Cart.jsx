import { useState, useEffect } from "react";
import "../App.css";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("current-user"));
    if (currentUser) {
      const dataFromLS = JSON.parse(localStorage.getItem("userData"));
      for (let i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === currentUser["current-user-email"]) {
          setCartProducts(dataFromLS[i]["cartProducts2"] || []);
          break;
        }
      }
    }
  }, []);

  return (
    <>
 <div id="top">
      <div id="left">
        <img src ="https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png" alt="swiggy"/>
        <p onClick={event =>  window.location.href='/Logout'}>Secure Checkout</p>
      </div>
      <div id="right">
          <div>Search</div>
          <div>Offers</div>
          <div>Help</div>
          <div>Sign In</div>
          <div>Cart</div>
        </div>
    </div>
    <div id="cart-bottom">
    <div id="pay">
      <div>
      <FontAwesomeIcon icon={faUser} size="1x" color="black" className="my-icon" />

<p>Logged in </p>
        <p>Ankita | 7987991667</p>
      </div>
      <div><FontAwesomeIcon icon={faMapMarkerAlt} size="1x" color="black" className="my-icon" />
<p>Add a delivery address</p>
      <p>You seem to be in the new location</p>
      <button id="address"><FontAwesomeIcon icon={faMapMarkerAlt} size="1x" color="green" className="my-icon" /><p>Add New Address</p><small>Malad, Malad West, Mumbai,<br/> Maharashtra, India</small></button></div>
      <div>Payment</div>
    </div>
      <div id="cart">
        {cartProducts.map((product, index) => (
          <div key={index}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}&nbsp;
            Malad West</p>
          </div>
        
        ))}
        
      </div>
    </div>

    </>
  );
};

export default Cart;


  
  
  
  
  
  
  
