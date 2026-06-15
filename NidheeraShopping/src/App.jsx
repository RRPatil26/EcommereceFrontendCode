import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './assets/Pages/Home'
import Login from './assets/Pages/Login'
import Register from './assets/Pages/Register'
import ProtectedRoute from './assets/Pages/ProtectedRoute'
import CategoryList from './assets/Pages/CategoryList'
import ProductList from './assets/Pages/ProductList'
import ProductsByCategory from './assets/Pages/ProductsByCategory'
import ProductDetails from './assets/Pages/ProductDetails'
import Wishlist from './assets/Pages/Wishlist'
import Cart from "./assets/Pages/Cart";
import Checkout from "./assets/Pages/Checkout";
import MyOrders from "./assets/Pages/MyOrders";
import AdminDashboard from "./assets/Pages/AdminDashboard";
import AdminOrders from "./assets/Pages/AdminOrders";
import AboutUs from "./assets/Pages/AboutUs";
import ContactUs from "./assets/Pages/ContactUs";
import Deals from "./assets/Pages/Deals";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
      
      <Routes> 
         <Route path="/" element={<Home/>} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path="/categories" element={<CategoryList/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/products/category/:categoryId" element={<ProductsByCategory/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/orders" element={<MyOrders />}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/admin/orders" element={<AdminOrders/>}/>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/deals" element={<Deals />} />
        
        
        
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
