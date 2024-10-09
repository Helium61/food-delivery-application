import { useState } from "react"; // Import useState
import PropTypes from 'prop-types'; // Import PropTypes
import { menu_list } from "../assets/assets"; // Importing menu list

const ExploreMenu = ({ category, setCategory }) => {
  // State to keep track of the selected menu item
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="explore-menu" id="explore-menu">
      {/* Centered heading */}
      <h1 className="text-center text-4xl font-bold mt-20 font-serif mb-10">Explore Our Menu</h1>

      {/* Flex container for menu images */}
      <div className="explore-menu-list flex flex-wrap justify-center">
        {menu_list.map((item, index) => {
          // Check if the current item is active
          const isActive = activeIndex === index;

          return (
            <div 
              key={index} 
              onClick={() => {
                setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name));
                setActiveIndex(index); // Set the active index to the clicked item
              }} 
              className="explore-menu-list-item w-1/4 p-2 flex flex-col items-center cursor-pointer"
            >
              {/* Active class for the image */}
              <div className={`relative ${isActive ? 'border-4 border-orange-600 rounded-full p-1' : ''}`}>
                <img 
                  src={item.menu_image} 
                  alt={item.menu_name} 
                  className="w-32 h-auto" 
                />
              </div>
              {/* Make title clickable */}
              <button className="text-center mt-2 cursor-pointer hover:text-orange-600">
                {item.menu_name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// PropTypes validation
ExploreMenu.propTypes = {
  category: PropTypes.string, // Assuming category is a string
  setCategory: PropTypes.func.isRequired, // setCategory should be a function
};

export default ExploreMenu;
