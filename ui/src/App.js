import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage.js';

function App() {
  return (
    <Router>
      {/*<HeroNavbar/>*/}
      <Routes>
        <Route path='/' element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
