import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AllSettings } from './components/AllSettings/AllSettings';
import { PageNotFound } from './pages/PageNotFound';
import { Navigation } from './components/Navigation/Navigation';

function App() {
  return (
    <>
    <Navigation />
      <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/settings" element={ <AllSettings /> } />
      <Route path="*" element={ <PageNotFound />} />
    </Routes>
    </>
  );
}

export default App;
