import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Watch from "./Pages/Watch";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='search' element={<Search/>}/>
        <Route path ='watch' element={<Watch/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
