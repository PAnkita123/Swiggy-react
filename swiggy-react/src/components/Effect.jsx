import { useEffect, useState } from "react";
import "../App.css";
import {useNavigate} from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Searchbar from './Searchbar.jsx'


const Effect = () => {
  const [products, setProducts] = useState();
  const router = useNavigate();
  console.log(products, "products here");
 

  // useEffect(() => {
  //   alert("working!");
  // });

  function addToCart(pro) {
    console.log(pro)
    var product = { image:pro.strDrinkThumb, name: pro.strDrink, price: 250 };
    var dataFromLS = JSON.parse(localStorage.getItem("userData"));
    var currentUser = JSON.parse(localStorage.getItem("current-user"));
    if (currentUser) {
      var allUsers = [];
      for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === currentUser["current-user-email"]) {
          var newObj = dataFromLS[i];
          newObj["cartProducts2"] = newObj["cartProducts2"] || [];
          newObj["cartProducts2"].push(product);
          allUsers.push(newObj);
        } else {
          allUsers.push(dataFromLS[i]);
        }
      }
      localStorage.setItem("userData", JSON.stringify(allUsers));
      alert("Product added to cart!");
    } else {
      alert("Login first to add product into cart!");
      router('/Login')
    }
  }

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((res) => res.json())
      .then((json) => setProducts(json));
    
  }, []);

  
  return (
    <>
    <div id="top">
      <div id="left">
        <img src ="https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png" alt="swiggy"/>
        <p>Malad West Malad West Mumbai</p>
      </div>
      <div id="right">
          <div><FontAwesomeIcon icon={faSearch} size="1x" color="black" className="my-icon" />
          
Search</div>
          <div><FontAwesomeIcon icon={faTags} size="1x" color="black" className="my-icon" />
Offers</div>
          <div><FontAwesomeIcon icon={faQuestionCircle} size="1x" color="black" className="my-icon" />
Help</div>
          <div><FontAwesomeIcon icon={faUser} size="1x" color="black" className="my-icon" />Sign In</div>
          <div onClick={event =>  window.location.href='/Cart'}><FontAwesomeIcon icon={faShoppingCart} size="1x" color="black" className="my-icon" />
Cart</div>
        </div>
    </div>
    <Searchbar/>
      <div id="products" >
        {products &&
          products.drinks.map((drink) => (
            <div key={drink.idDrink} onClick ={() =>router(`/Effect/${drink.idDrink}`)}>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
              <h4>{drink.strDrink}</h4>
              <p>Price Rs. 250/-</p>
              <button
                onClick={() => addToCart(drink)}
                id="addtoCart"
              >
                Add to cart
              </button>
            </div>
          ))}
          
      </div>
      
    </>
  );
};

export default Effect;

