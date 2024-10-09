import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { cartItems, food_list } = useContext(StoreContext);

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
    <div className="place-order container mx-auto p-6 flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-lg">
      <div className="form-section md:w-1/2 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800">Place Your Order</h2>

        {/* Shipping Information Form */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Form Fields */}
            <div>
              <label className="block mb-2 text-gray-700">First Name:</label>
              <input
                type="text"
                placeholder="Your First Name"
                className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Last Name:</label>
              <input
                type="text"
                placeholder="Your Last Name"
                className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-2 text-gray-700">Address:</label>
              <input
                type="text"
                placeholder="Your Address"
                className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Email:</label>
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Phone Number:</label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Postal Code:</label>
              <input
                type="text"
                placeholder="Your Postal Code"
                className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">State:</label>
              <input
                type="text"
                placeholder="Your State"
                className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Update the alert to use correct syntax */}
          <button
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
            onClick={() => alert(`Order placed! Total: $${total.toFixed(2)}`)} // Fixed syntax here
          >
            Confirm Order
          </button>
        </div>
      </div>

      {/* Enhanced Order Summary Section */}
      <div className="order-summary md:w-1/2 p-4 ml-0 md:ml-4 mt-4 md:mt-0 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
        <div className="bg-gray-50 p-4 mt-2 rounded-lg shadow">
          <h4 className="font-semibold text-lg mb-6 text-center">Your Ordered Items:</h4>
          <ul className="mb-4 flex flex-col items-center">
            {food_list.map((item) => {
              const quantity = cartItems[item._id] || 0;
              return (
                quantity > 0 && (
                  <li key={item._id} className="flex justify-between mb-2 w-full">
                    <span>{item.name} x {quantity}</span>
                    <span>${(item.price * quantity).toFixed(2)}</span>
                  </li>
                )
              );
            })}
          </ul>
          <div className="flex justify-between mb-2">
            <p className="text-gray-700">Subtotal:</p>
            <p className="font-semibold">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-700">Delivery Fee:</p>
            <p className="font-semibold">${deliveryFee.toFixed(2)}</p>
          </div>
          <hr className="my-2 border-gray-300" />
          <div className="flex justify-between font-semibold text-lg">
            <p>Total:</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
