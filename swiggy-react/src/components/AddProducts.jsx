import React from 'react';
import {useNavigate} from 'react-router-dom'
import {useState} from "react";


function SubmitProducts(){
    const [products, setUserData] =useState({product:"", image:"", price:""})
    const router= useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        
        var cartProduct = JSON.parse(localStorage.getItem("products")) || [];
        cartProduct.push(products);
        localStorage.setItem("products" , JSON.stringify(cartProduct));
        setUserData({product:"", image:"", price:""})
        alert("Product adde to cart!")
    }

    function addingProduct(e){
        var name=e.target.name;
        var value= e.target.value;
        setUserData({...products, [name] : value})
    }


return(
    <form onSubmit ={(event) =>handleSubmit(event)}>
       <label>Add Product name</label><br/>
       <input onChange={addingProduct} name="product" value={products.name} /><br/>
       <label>Add product Image</label><br/>
       <input  onChange={addingProduct}  name="image" value={products.image} /><br/>
       <label>Add product price</label><br/>
       <input  onChange={addingProduct}  name="price" value={products.price}/><br/>
       <input type="submit" value="add Products"/><br/>

    </form>

)
}
export default SubmitProducts;