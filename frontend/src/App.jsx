import React from 'react'
import Home from './Components/Home'
import bg from './assets/bg.jpeg';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Hero from './Components/Hero';
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

        <Route path = '/hero' element = {
          <Hero/>
        }/>
    </Routes>
  )
}

export default App