import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';

function App() {
  return (
    <>
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
