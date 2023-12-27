import React from 'react';
import {useState, useEffect} from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Import your Navbar component
import Categories from './Category'; // Import your Categories component
import DishList from './DishList'; // Import your DishList component
import Result from './Result'; // Import your Result component
import Search from './Search'; // Import your Result component
import {Link} from "react-router-dom"
import Home from './Home'

function App() {
 
      
  return (
<div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dishchoice" element={<DishList/>} />
      </Routes>
      </div>
  );
}

export default App;
