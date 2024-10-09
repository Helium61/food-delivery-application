import { useContext } from 'react'; 
import PropTypes from 'prop-types'; // Import PropTypes
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({ id, name, price, description, image, rating }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // Get the current quantity of the item from the cart
  const currentQuantity = cartItems[id] || 0;

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-32 object-cover rounded-t-lg" />
      <div className="flex items-center justify-between mt-2">
        <h3 className="font-semibold text-lg mx-2">{name}</h3>
        <div className="flex items-center">
          {/* Decrement Button */}
          <button 
            className="text-red-500 text-4xl" 
            onClick={() => currentQuantity > 0 && removeFromCart(id)}>
            -
          </button>
          {/* Display Quantity */}
          <span className="mx-2">{currentQuantity}</span>
          {/* Increment Button */}
          <button 
            className="text-green-500 text-2xl" 
            onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
      <p className="text-gray-600 mt-1">{description}</p>
      <p className="text-green-600 font-bold mt-2">${price}</p>
      <div className="mt-2">
        {/* Render rating stars */}
        {Array.from({ length: 5 }, (v, i) => (
          <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

// Add prop types validation
FoodItem.propTypes = {
  id: PropTypes.string.isRequired,        // Validate id as required string
  name: PropTypes.string.isRequired,      // Validate name as required string
  price: PropTypes.number.isRequired,     // Validate price as required number
  description: PropTypes.string.isRequired,// Validate description as required string
  image: PropTypes.string.isRequired,     // Validate image as required string
  rating: PropTypes.number.isRequired,     // Validate rating as required number
};

export default FoodItem;
