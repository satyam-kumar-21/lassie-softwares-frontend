import React from "react";
import img1 from "../../../src/Image/services/web.png";
import img2 from "../../../src/Image/services/android.png";
import img3 from "../../../src/Image/services/p.png";
import img4 from "../../../src/Image/services/b.png";

function ServiceHero3() {
  return (
    <div className="flex flex-col lg:flex-row justify-center bg-gray-100 lg:py-8 py-2">
      {/* Left column for small screens and full-width for large screens */}
      <div className="lg:w-2/5 lg:pl-20 pl-1">
        <div className="flex items-center lg:py-3 lg:px-10 py-2 px-5 mb-8 border border-gray-300 rounded-lg shadow-md">
          <img
            src={img1}
            alt="Web Development"
            className="w-12 h-12 mr-2 rounded-full"
          />
          <h3 className="text-lg font-bold">Web Development</h3>
        </div>
        <div className="flex items-center lg:py-3 lg:px-10 py-2 px-5 mb-8 border border-gray-300 rounded-lg shadow-md">
          <img
            src={img2}
            alt="Mobile Development"
            className="w-12 h-12 mr-2 rounded-full"
          />
          <h3 className="text-lg font-bold">Android Development</h3>
        </div>
        <div className="flex items-center lg:py-3 lg:px-10 py-2 px-5 mb-8 border border-gray-300 rounded-lg shadow-md">
          <img
            src={img3}
            alt="Design"
            className="w-12 h-12 mr-2 rounded-full"
          />
          <h3 className="text-lg font-bold">Product Designing</h3>
        </div>
        <div className="flex items-center lg:py-3 lg:px-10 py-2 px-5 border border-gray-300 rounded-lg shadow-md">
          <img
            src={img4}
            alt="Consulting"
            className="w-12 h-12 mr-2 rounded-full"
          />
          <h3 className="text-lg font-bold">Brand Designing</h3>
        </div>
      </div>

      <div className="lg:w-3/5 lg:pt-6 lg:pl-16 lg:pr-10 lg:pb-5 px-5 py-10 text-center lg:text-left">
      <p className="text-blue-800 font-semibold mb-5">OUR CAPABILITIES</p>
      <p className="lg:text-2xl text-xl font-bold mb-4">
        From Old technology to the New, <br /> We Are There
      </p>
      <p className="mb-4 lg:pr-16">
        Guiding the shift from outdated methods to innovative solutions, we're
        at your side, ensuring a smooth transition into the future of
        technology with our modern expertise and support
      </p>
      <div className="flex flex-col mb-4 lg:w-[65%]">
        <div className="flex justify-between mb-2 text-blue-700">
          <p>
            <i className="fas fa-check mr-2"></i>Research Based Work
          </p>
          <p>
            <i className="fas fa-check mr-2"></i>Detailed Work
          </p>
        </div>
        <br />
        <div className="flex justify-between text-blue-700">
          <p>
            <i className="fas fa-check mr-2"></i>Frequent Reviews
          </p>
          <p>
            <i className="fas fa-check mr-2"></i>24/7 Full Support More Detail
          </p>
        </div>
      </div>
    
      <button className="mx-auto lg:mt-2 mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        More Details
      </button>
    </div>
    
    </div>
  );
}

export default ServiceHero3;
