import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homing from './components/Homing'
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import Register from './components/Register'
import './App.css'
// import Register from
class App extends Component {
  render() {
    return (
      <>
      <Routes>
        <Route path="/" element={<Homing/>}  />
        <Route path='/NavBar' element={<NavBar/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </> 
    )
  }
}

export default App