import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';
import Navbar from './component/Navbar';
import About from './component/About';
import Photo from './component/Photo';
import Contact from './component/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProtectedRoutes />} >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Photo" element={<Photo />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route path="*" element={<div><h1>Page Not Found</h1></div>} />
        </Route>

        <Route exact path="/" element={<PublicRoutes />} >
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Login" element={<Login />} />
          <Route path="*" element={<div><h1>Page Not Found</h1></div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
