import { useState,useEffect } from 'react'
import Nav from './components/nav/Nav'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import BannerSlider from './components/bannerSlider/BannerSlider'
import Row from './components/row/Row'
import Row1 from './components/Row1/Row1'
import Row2 from './components/Row2/Row2'
import Row3 from './components/Row3/Row3'
import Row4 from './components/Row4/Row4'
import Info from './routes/info/Info';
import TvProvider from './routes/tvprovider/TvProvider';


function App() {


  return (
    <>
   <Nav/>
   
 <BannerSlider/>
 <Row   />
 <Row1/>
 <Row2/>
 <Row3/>
 <Row4/>

<BrowserRouter>

<Routes>

<Route  path='/tv-provider'  element={<TvProvider/>}  />
</Routes>

</BrowserRouter>

    </>
  )
}

export default App
