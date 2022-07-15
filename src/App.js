import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <div style={{margin:32}}>
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<ProtectedRoutes />} >
          <Route exact path="/" element={<Home />} />
        </Route>

        <Route exact path="/" element={<PublicRoutes />} >
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
