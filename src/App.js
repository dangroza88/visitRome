import React, { useState } from 'react';
import Tweet from './components/tweet/Tweet';
import Header from './components/header/Header';
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './components/home/home';
import Places from './components/places/places';
import Story from './components/share-your-story/story';


function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        <Header className="header" />
        <div className='container2'>
        </div>
          <div className="app">
            <Routes>
              <Route path='home' element={<Home />} />
              <Route path='places' element={<Places />} />
              <Route path='share-your-story' element={<Story />} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
