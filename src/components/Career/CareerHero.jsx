import React from "react";
import hero from "../../../src/Image/career/career1.png";
import { Link } from "react-router-dom";

function CareerHero() {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center bg-gray-100 py-8 lg:pt-20 lg:pb-0 px-6 relative">
      {/* Content */}
      <div className="lg:w-1/2 lg:order-1 lg:text-left lg:pl-[5rem] lg:pr-5 mb-8 lg:py-12 py-8 lg:mb-0 px-4">
        

        <p className="text-2xl lg:text-3xl font-bold mb-4 text-center lg:text-left">
        Want to join Us? Carrer
        </p>
        <p className="text-lg lg:text-xl text-gray-700 mb-6 text-center lg:text-left">
        Find You New Job Today! New Job Postings Everyday just for you, browse the job you want and apply wherever you want
        </p>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-bold py-2 px-4 lg:mr-10 rounded-lg block lg:inline-block mx-auto">
         <Link to="/contact-us"> Contact us</Link>
        </button>
      </div>


      <div className="absolute bg-blue-500 rounded-full w-60 h-60 lg:w-96 lg:h-96 -top-24 lg:-top-100 lg:ml-[550px] lg:mt-[45vh] mt-[53vh]"></div>

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

export default CareerHero;
