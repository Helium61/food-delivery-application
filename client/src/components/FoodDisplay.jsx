import { useContext } from "react"; 
import PropTypes from "prop-types"; // Import PropTypes
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem"; // Import the FoodItem component

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h1 className="text-5xl font-bold mb-16 text-center font-serif mt-16">Top Dishes Near You</h1>
      {/* Render the food list based on the category */}
      <div className="food-display-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {food_list.map((item, index) => (
          (category === "All" || category === item.category) && (
            <FoodItem 
              key={index} 
              id={item._id} 
              name={item.name} 
              description={item.description}
              price={item.price} 
              image={item.image} 
              rating={item.rating} // Assuming there's a rating property
            />
          )
        ))}
      </div>
    </div>
  );
};

// Add prop types validation
FoodDisplay.propTypes = {
  category: PropTypes.string.isRequired, // Validate category prop
};

export default FoodDisplay;
