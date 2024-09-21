import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage.js';
import MainPage from './components/MainPage.js';
import LogWidget from './components/LoggingWidget/LogWidget.js';

function App() {
  return (
    <Router>
      {/*<HeroNavbar/>*/}
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/food' element={<LogWidget />} />
      </Routes>
    </Router>
  );
}

export default App;
