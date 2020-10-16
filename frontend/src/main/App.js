import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import  './App.css'
import React from 'react'

import Logo from '../component/template/Logo'
import Nav from '../component/template/Nav'
import Home from '../component/Home/home'
import Footer from '../component/template/Footer'

export default props =>
<div className="app">
    <Logo/>
    <Nav/>
  <Home/>
    
    <Footer/>
</div>