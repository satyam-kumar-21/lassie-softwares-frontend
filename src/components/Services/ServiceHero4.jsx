import React from "react";
import hero from "../../../src/Image/services/hero4.png";
import unlimited from "../../../src/Image/services/unlimited.png";

function ServiceHero4() {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center bg-white py-4 lg:pt-1 lg:pb-0 px-6 relative">
      {/* Content */}
      <div className="lg:w-1/2 lg:order-1 lg:text-left lg:pl-[5rem] lg:pr-5 mb-8 lg:py-12 py-8 lg:mb-0 px-4">
        <p className="text-lg lg:text-lg font-semibold mb-4 text-center lg:text-left">
         
          <span className="text-blue-600 block lg:inline">
          GET STARTED
          </span>
        </p>

        <p className="text-2xl lg:text-3xl font-bold mb-4 text-center lg:text-left">
        Let's Start Here! New  <br/>
        Space for World
        </p>
        <p className="text-lg lg:text-lg text-gray-700 mb-6 text-center lg:text-left">
        Embark on a new journey with us! Join our innovative space for a better world and a brighter future.
        </p>
        <a
        href="https://wa.me/916203176139"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-white font-semibold bg-blue-700 border border-gray-300 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg mx-auto"
      >
        Get Consult
      </a>
      
      
      </div>

      {/* Circular Background */}
      <div className="absolute bg-blue-500 rounded-full w-60 h-60 lg:w-[31rem] lg:h-[31rem] -top-24 lg:-top-100 lg:ml-[600px] lg:mt-[30vh] mt-[58vh]"></div>

      {/* Image */}
      <div className="lg:w-1/2 lg:order-2 flex justify-center items-center lg:p-6 lg:pl-[4rem] lg:pr-[8rem] relative">
        <img
          src={hero}
          alt="Hero"
          className="object-cover w-full lg:w-[100%] h-72 lg:h-[100%] lg:max-w-none lg:px-0"
        />
      </div>
    </div>
  );
}

export default ServiceHero4;
