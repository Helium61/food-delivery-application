const Header = () => {
  return (
    <div className="header relative flex items-center justify-center mt-20 bg-white">
      {/* Container for image and text */}
      <div className="relative w-3/4 h-auto">
        {/* Image as a background */}
        <img
          src="src/assets/header_img.png"
          alt="Header Image"
          className="object-cover w-full h-full"
        />

        {/* Text overlaid on the image */}
        <div className="absolute inset-0 flex flex-col justify-end items-start p-5 lg:p-10 text-left fade-in">
          <h1 className="text-2xl lg:text-4xl font-bold text-white">
            Order Your <br />
            <span className="block">Favourite Food here</span>
          </h1>
          <p className="mt-2 text-sm lg:text-lg text-white max-w-xs lg:max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel
            corporis nam necessitatibus neque? Molestias suscipit inventore modi
            eveniet quidem, facere culpa delectus magnam excepturi repellendus.
          </p>
          <button className="mt-4 px-4 lg:px-6 py-2 bg-white text-black rounded-full hover:bg-orange-700 text-sm lg:text-base">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
