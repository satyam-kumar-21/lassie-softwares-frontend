import React from "react";
import companyoverview from "../../../src/Image/about/company overview.png";
import { Link } from "react-router-dom";

function CompanyOverwiew() {
  return (
    <>
      <section className="text-gray-900 bg-white body-font">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={companyoverview}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
            <p>About us</p>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
              Our Company Overview
            </h1>
            <p className="mb-4 leading-relaxed">
              Lassie Softwares, an Indian IT firm, excels in web and app
              development, design, and IT consulting. They specialize in
              crafting secure, user-friendly websites and mobile apps optimized
              for diverse platforms.
            </p>
            <p className="mb-4 leading-relaxed">
              With innovative design solutions, they enhance client branding
              and communication strategies. Hitech Junction's personalized
              approach ensures tailored solutions that meet each client's
              unique needs, making them a reliable partner for businesses
              seeking top-quality IT services in India.
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact-us"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Contact us
              </Link>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CompanyOverwiew;
