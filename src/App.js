import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar logoName={"TextUtils"} homeText={"Home"} aboutText={"about"}/>
    </div>
  );
}

export default App;
