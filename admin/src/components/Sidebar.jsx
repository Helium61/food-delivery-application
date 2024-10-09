import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faList, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:flex">
      {/* Sidebar toggle button for mobile */}
      <button
        className="lg:hidden text-white bg-green-950 p-3 fixed top-4 left-4 z-20"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Sidebar (hidden on small screens, visible on large screens) */}
      <div className={`w-64 h-screen bg-green-950 text-white p-4 fixed lg:relative top-0 left-0 z-10 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                `py-3 px-4 flex items-center rounded-lg shadow-md transition-all duration-200 ${
                  isActive ? 'bg-green-700' : 'bg-green-900 hover:bg-green-800'
                }`
              }
            >
              <FontAwesomeIcon icon={faPlus} className="mr-3" />
              Add Items
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/list"
              className={({ isActive }) =>
                `py-3 px-4 flex items-center rounded-lg shadow-md transition-all duration-200 ${
                  isActive ? 'bg-green-700' : 'bg-green-900 hover:bg-green-800'
                }`
              }
            >
              <FontAwesomeIcon icon={faList} className="mr-3" />
              List Items
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `py-3 px-4 flex items-center rounded-lg shadow-md transition-all duration-200 ${
                  isActive ? 'bg-green-700' : 'bg-green-900 hover:bg-green-800'
                }`
              }
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-3" />
              Orders
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
