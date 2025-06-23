import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { contextApi } from './context/Context';
import ProctedRoute from './components/proctedRoute';


function App() {
const [loginStatus, setloginStatus] = useState(false)
console.log(loginStatus);


  return (
    <>
    <contextApi.Provider  value={{loginStatus, setloginStatus}}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<h1> hello world</h1>}/>
        <Route path="/home" element={
          <ProctedRoute>
          <Home/>
          </ProctedRoute>
          }/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    </contextApi.Provider>
    </>
  )
}

export default App
