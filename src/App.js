import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import NoticeBoard from './components/NoticeBoard/NoticeBoard';
import Footer from './components/Footer';
import Login from './components/Login/Login';
import { useState} from "react"

function App() { 
  const [auth, setAuth] = useState({
  auth_status: false,
  username:"",
  email: "",
  token: "",
});
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/NoticeBoard" element={<NoticeBoard/>}/> 
          <Route path="/Login" element={<Login auth={auth} setAuth={setAuth} />} />
          </Routes>
        </div>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
