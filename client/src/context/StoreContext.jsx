import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      // If the item quantity is 1, remove it from the cart entirely
      if (prev[itemId] === 1) {
        const newCart = { ...prev };
        delete newCart[itemId];
        return newCart;
      }
      // Otherwise, decrease the quantity
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

// PropTypes validation
StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children are required
};

export default StoreContextProvider;
