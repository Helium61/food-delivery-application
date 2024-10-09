import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddItems from "./pages/AddItems";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify CSS

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Navbar at the top */}
        <Navbar />
        
        <div className="flex flex-1">
          {/* Sidebar on the left */}
          <Sidebar />
          
          {/* Main content area */}
          <div className="flex-1 p-6">
            <Routes>
              <Route path="/add" element={<AddItems />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </div>

        {/* Add ToastContainer to show toast notifications globally */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
