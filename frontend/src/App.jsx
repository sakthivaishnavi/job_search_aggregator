import React from 'react'
import Home from './Components/Home'
import bg from './assets/bg.jpeg';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Hero from './Components/Hero';
import Contact from './Components/Contact';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <Routes>

      <Route path="/" element={
      <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.9' }}>
      <Home/>
      </div>
      }/>

      <Route path = '/signup' element = {
      <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.9' }}>
        <Signup/>
        </div>
        }/>

      <Route path = '/login' element = {
      <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.9' }}>
        <Login/>
        </div>
        }/>

<Route path = '/contact' element = {
      <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.9' }}>
        <Contact/>
        </div>
        }/>


        <Route path = '/hero' element = {
          <div style={{ backgroundColor:'lightblue', backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.9' }}>
          <Hero/>
          </div>
        }/>
    </Routes>
  )
}

export default App