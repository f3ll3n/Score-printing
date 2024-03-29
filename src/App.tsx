import React from 'react';
import './styles/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation, WriteMap } from './components';
import { HomePage } from './pages/HomePage';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <>
    <Navigation />
      <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/test/:id" element={ <WriteMap /> } />
      <Route path="*" element={ <PageNotFound />} />
    </Routes>
    </>
  );
}

export default App;
