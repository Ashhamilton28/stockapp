import './App.css';
import Data from "./Data"
import Home from "./components/Home"
import Stock from "./components/Stock";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <Home />
      <NavBar />
      <About />
      <Stock />
      <Dashboard />
    </div>
  );
}

export default App;
