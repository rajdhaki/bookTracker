import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { contextApi } from './context/Context';
// import ProctedRoute from './components/ProctedRoute';
import Dashboard from './pages/Dashboard';


function App() {
const [loginStatus, setloginStatus] = useState(false)
console.log(loginStatus);


  return (
    <>
    <contextApi.Provider  value={{loginStatus, setloginStatus}}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={
          // <ProctedRoute>
          <Dashboard/>
          // </ProctedRoute>
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
