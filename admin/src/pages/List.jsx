import { useEffect, useState } from "react"; // Make sure to import useState
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications

const List = () => {
  const url = "http://localhost:4000"; // Base URL
  const [list, setList] = useState([]);

  // Function to fetch the food list from the API
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data);
      
      if (response.data.success) {
        setList(response.data.data); // Update state with the fetched data
      } else {
        toast.error("Error fetching list");
      }
    } catch (error) {
      console.error("Error fetching the list:", error.message);
      toast.error("Error fetching the list. Check your server and URL.");
    }
  };

  // Function to remove a food item by its ID
  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      
      if (response.data.success) {
        // Refetch the updated list after successful removal
        await fetchList();

        // Show success notification
        toast.success("Item removed successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Error removing item");
      }
    } catch (error) {
      console.error("Error removing item:", error.message);
      toast.error("Error removing item");
    }
  };

  // Fetch the list when the component mounts
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <ToastContainer /> {/* Include the ToastContainer to display toasts */}
      <h2 className="text-2xl font-bold mb-4">Food Items List</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item._id} className="border-b">
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2">{item.category}</td>
              <td className="border px-4 py-2">{item.price}</td>
              <td className="border px-4 py-2">
                <button 
                  onClick={() => removeFood(item._id)} 
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
