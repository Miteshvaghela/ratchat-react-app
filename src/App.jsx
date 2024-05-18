import React from 'react'
import Header from './components/Header/Index';
import Footer from './components/Footer/Index';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className=" container mx-auto min-h-96">
     <Header title="RatChat App"/>
      <Outlet />
     <Footer/>
    </div>    
  )
}

export default App