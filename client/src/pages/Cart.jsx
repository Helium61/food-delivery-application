import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate(); // Initialize useNavigate

  // Calculate subtotal
  const subtotal = food_list.reduce((acc, item) => {
    if (cartItems[item._id] > 0) {
      return acc + item.price * cartItems[item._id];
    }
    return acc;
  }, 0);

  const deliveryFee = 5.99; // Fixed delivery fee
  const total = subtotal + deliveryFee; // Calculate total

  return (
    <div className="cart container mx-auto p-2">
      <div className="cart-items bg-white shadow-sm rounded-lg overflow-hidden">
        {/* Cart Title */}
        <div className="cart-items-title grid grid-cols-6 gap-2 text-xs font-semibold bg-gray-50 p-2">
          <p className="col-span-1">Item</p>
          <p className="col-span-2">Title</p>
          <p className="col-span-1 text-right">Price</p>
          <p className="col-span-1 text-right">Qty</p>
          <p className="col-span-1 text-right">Total</p>
          <p className="col-span-1 text-right"></p>
        </div>

        {/* Cart Items */}
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div
                className="cart-items-item grid grid-cols-6 gap-2 p-1 items-center border-b border-gray-200"
                key={index}
              >
                {/* Item Image */}
                <div className="col-span-1 flex justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                </div>

                {/* Item Name */}
                <p className="col-span-1 text-gray-700 text-sm">{item.name}</p>

                {/* Item Price */}
                <p className="col-span-1 text-right text-gray-600 text-sm">
                  ${item.price}
                </p>

                {/* Item Quantity */}
                <p className="col-span-1 text-right text-gray-600 text-sm">
                  {cartItems[item._id]}
                </p>

                {/* Total Price */}
                <p className="col-span-1 text-right text-gray-600 text-sm">
                  ${(item.price * cartItems[item._id]).toFixed(2)}
                </p>

                {/* Remove Button */}
                <div className="col-span-1 flex justify-end items-center">
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
                    aria-label="Remove item"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      {/* Cart Summary */}
      <div className="cart-summary bg-white p-4 mt-4 shadow-sm rounded-lg text-sm">
        <div className="flex justify-between items-center">
          <p>Subtotal:</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Delivery Fee:</p>
          <p>${deliveryFee}</p>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between items-center font-semibold">
          <p>Total:</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <button
          className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-200"
          onClick={() => navigate("/order")} // Navigate to Place Order page
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
