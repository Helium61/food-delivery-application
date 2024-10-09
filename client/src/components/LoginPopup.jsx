import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm space-y-6 relative">
        {/* Title */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{currState}</h2>
          <button
            onClick={() => setShowLogin(false)}
            className="text-gray-500 hover:text-black focus:outline-none"
          >
            &times;
          </button>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          {currState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
          )}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-semibold py-2 rounded-lg hover:bg-orange-700 transition duration-200"
        >
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Terms and Conditions */}
        <div className="text-sm text-gray-600 mt-4 flex flex-col items-start">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" required />
            <span>
              By continuing, I agree to the{" "}
              <a href="#" className="text-orange-600">
                terms of use
              </a>{" "}
              &{" "}
              <a href="#" className="text-orange-600">
                privacy policy
              </a>.
            </span>
          </label>

          {/* Switch between Login and Sign Up */}
          {currState === "Login" ? (
            <p className="mt-2">
              Create a new account?{" "}
              <span
                onClick={() => setCurrState("Sign Up")}
                className="text-orange-600 cursor-pointer hover:underline"
              >
                Click Here
              </span>
            </p>
          ) : (
            <p className="mt-2">
              Already have an account?{" "}
              <span
                onClick={() => setCurrState("Login")}
                className="text-orange-600 cursor-pointer hover:underline"
              >
                Login Here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

// Add prop types validation
LoginPopup.propTypes = {
  setShowLogin: PropTypes.func.isRequired, // Validate setShowLogin as required function
};

export default LoginPopup;
