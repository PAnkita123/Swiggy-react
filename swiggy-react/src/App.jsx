import { useState } from 'react'
import Register from "./components/Register"
import Effect from './components/Effect'
import {Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import AddProducts from './components/AddProducts.jsx'
import Home from './components/Home.jsx'
import Logout from './components/Logout.jsx'
// import toast, { useToaster } from 'react-hot-toast/headless';
import Cart from './components/Cart.jsx'

function App() {
  return (
    <div>
      {/* <h1>Initial Value{name}</h1>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button> */}
      {/* <Effect /> */}
      

      <Routes>
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/register' element ={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/AddProducts' element={<AddProducts/>}/>
        <Route exact path='/Effect' element={<Effect/>}/>
        <Route exact path='/Logout' element={<Logout/>}/>
        <Route exact path='/Cart' element={<Cart/>}/>
      


      </Routes>

  
    </div>
  );
}
    
export default App;
