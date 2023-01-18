import logo from './logo.svg';
import Navbar from './Components/Navbar.js';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import HomePage from './Components/HomePage';
import ResearchForm from './Components/ResearchForm';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/faculty" element={<Dashboard/>} />
          <Route exact path="/form" element={<ResearchForm/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
