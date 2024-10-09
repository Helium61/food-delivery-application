import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-green-950 shadow-md">
      <div className="container mx-auto flex justify-center items-center">
        {/* Centered Logo */}
        <Link to='/'>
          <h1 className="text-white font-serif text-2xl lg:text-3xl text-center">
            Admin Panel
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
