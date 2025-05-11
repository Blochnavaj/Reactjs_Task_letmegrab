 import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Products from './Pages/Products'
 function App() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

   return (
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route
          path="/products"
          element={user ? <Products /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer/>
      </BrowserRouter>
    
   )
 }
 
 export default App