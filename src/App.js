import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Reg from "./components/Reg";
import Shop from "./components/Shop";
import Features from "./components/Features";
import Newin from "./components/Newin";
import './index.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Products from "./components/Products";



const App = () => {
 
  return (
    <>


      <Router>
        <Navbar />

        <Routes>

      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/cart" element={<Cart/>}></Route>
      <Route exact path="/reg" element={<Reg/>}></Route>
      <Route exact path="/shop" element={<Shop/>}></Route>
      <Route exact path="/features" element={<Features/>}></Route>
      <Route exact path="/newin" element={<Newin/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/signup" element={<Signup/>}></Route>
      <Route exact path="/products" element={<Products/>}></Route>
      

          
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
