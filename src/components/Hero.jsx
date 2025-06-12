import React from "react";
import HeroImage from "../assets/Hero-Image.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt="Hero"
        className="mx-auto mb-8 w-48 h-48  rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ml-2">
          Samson Odejide
        </span>
        , Frontend Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in creating beautiful modern and responsive web
        applications.
      </p>
      <div className="mt-8 space-x-4">
        <a href="mailto:odejideabiodun7@gmail.com">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300  hover:scale-105 px-4 py-2 rounded">
            Contact with me
          </button>
        </a>
        <a
          href="https://drive.google.com/file/d/1-Sg7CzugQLaaFTnCwoUr2HQ7-8mmO63F/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300  hover:scale-105 px-4 py-2 rounded">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
