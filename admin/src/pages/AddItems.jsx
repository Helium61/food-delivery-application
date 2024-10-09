import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
import { Slide } from 'react-toastify'; // Optional: Slide for transition animation

const AddItems = () => {
  const url = "http://localhost:4000"; // Base URL for the API
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  // Handle form field changes
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    // Prepare form data
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);

    try {
      // Send form data to the server
      const response = await axios.post(`${url}/api/food/add`, formData); 
      
      if (response.data.success) {
        // Show success notification when item is added
        toast.success("Product added successfully!", {
          position: "top-right",
          autoClose: 5000,
          transition: Slide,
        });

        // Reset form fields after successful submission
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
      } else {
        // Show error toast if submission failed
        toast.error("Failed to add product", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("Error adding product", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <ToastContainer /> {/* Include the ToastContainer to display toasts */}
      
      <h2 className="text-2xl font-bold mb-6">Add New Item</h2>

      <form className="space-y-4" onSubmit={onSubmitHandler}>
        {/* Name */}
        <div>
          <label className="block text-gray-700">Product Name</label>
          <input
            onChange={onChangeHandler}
            value={data.name}
            name="name"
            type="text"
            placeholder="Enter item name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            placeholder="Enter item description"
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700">Category</label>
          <select
            onChange={onChangeHandler}
            value={data.category}
            name="category"
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Salad">Salad</option>
            <option value="Rolls">Rolls</option>
            <option value="Deserts">Deserts</option>
            <option value="Sandwiches">Sandwiches</option>
            <option value="Cakes">Cakes</option>
            <option value="Pure Veg">Pure Veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles">Noodles</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700">Price</label>
          <input
            onChange={onChangeHandler}
            value={data.price}
            name="price"
            type="number"
            placeholder="Enter price"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Add button */}
        <div>
          <button
            type="submit"
            className="w-full bg-green-950 text-white py-2 rounded-md hover:bg-green-800 transition-colors"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItems;
