import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Navbar from './components/navbar'
import About from './pages/About'
import Profile from './components/Profile'
import MyOrder from './components/MyOrder'
import Cart from './components/Cart'
import React from 'react'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Shop" element={<Shop />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/MyOrders" element={<MyOrder />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
