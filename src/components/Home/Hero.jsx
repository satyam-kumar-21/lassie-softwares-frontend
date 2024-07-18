import React from "react";
import hero from "../../../src/Image/Hero-image.png"

function Hero() {
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-center items-center bg-white lg:py-24 px-6">
      {/* Content */}
      <div className="lg:w-1/2 lg:order-1 lg:text-left lg:pl-[5rem] lg:pr-5 mb-8 lg:py-12 py-8 lg:mb-0 px-4">
        <p className="text-3xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
          <span className="">Empower   </span> <b className="">Your Business</b> with
          <b> Innovative Solutions</b> 
        </p>
        <p className="text-lg lg:text-xl text-gray-700 mb-6 text-center lg:text-left">
        Discover how we transform ideas into reality through cutting-edge
        technology and expert craftsmanship.
        </p>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-bold py-2 px-4 rounded-lg block lg:inline-block mx-auto">
          Let’s get started!
        </button>
      </div>

      <div className="lg:w-1/2 lg:order-2 flex justify-center items-center lg:p-6 lg:pl-[4rem] lg:pr-[8rem]">
        <img
          src={hero}
          alt="Hero"
          className="object-cover w-full lg:w-[100%] h-72 lg:h-[100%] lg:max-w-none lg:px-0"
        />
      </div>
    </div>
  );
}

export default Hero;
