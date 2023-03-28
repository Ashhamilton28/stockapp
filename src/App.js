import './App.css';
import Data from "./Data"
import Home from "./components/Home"
import Stock from "./components/Stock";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/dashboard" element={<Dashboard />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
