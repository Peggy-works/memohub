import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage.js';
import MainPage from './components/MainPage.js';
import NotesPage from './components/NotesPage.js';
import LogWidget from './components/LoggingWidget/LogWidget.js';

// Context
import { ThemeProvider } from './context/ThemeContext.js';


function App() {
  return (
    <ThemeProvider>
      <Router>
        {/*<HeroNavbar/>*/}
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/food' element={<LogWidget />} />
          <Route path='/notes' element={<NotesPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
