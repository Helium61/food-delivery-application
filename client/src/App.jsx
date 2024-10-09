import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Footer from "./components/Footer"
import LoginPopup from './components/LoginPopup';
import PlaceOrder from './pages/PlaceOrder';

const App = () => {
  const [showLogin,setShowLogin]=useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <Router>
      <div className="app">
        <Navbar setShowLogin={setShowLogin} alt="" className="logo"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
    </Router>
      <Footer/>
    </>
  );
};

export default App;
