import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';


function App() {
  return (
    <>
      <div className="app-container">
        <Router>
          <Routes>
            <Route path="/" element={ <Home /> } />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
