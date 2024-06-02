import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './Scss/main.scss';
import Home from './components/pages/home';
import About from './components/pages/about';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;