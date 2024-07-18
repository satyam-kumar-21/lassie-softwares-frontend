import React, { useRef } from "react";
import com from "../../../src/Image/demo logo.png"

function MeetPeople() {
  const containerRef = useRef(null);

  const handleScrollLeft = () => {
    containerRef.current.scrollBy({
      left: -100,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    containerRef.current.scrollBy({
      left: 100,
      behavior: "smooth",
    });
  };

  const companies = [
    {
      id: 1,
      name: "Company A",
      logo: com ,
    },
    {
      id: 2,
      name: "Company B",
      logo: com,
    },
    {
      id: 2,
      name: "Company B",
      logo:com,
    },
    {
      id: 2,
      name: "Company B",
      logo: com,
    },
    {
      id: 2,
      name: "Company B",
      logo:com,
    },
    {
      id: 2,
      name: "Company B",
      logo: com,
    },
    {
      id: 2,
      name: "Company B",
      logo: com,
    },
    {
      id: 2,
      name: "Company B",
      logo: com,
    },
    {
      id: 2,
      name: "Company B",
      logo: com,
    },
    {
      id: 2,
      name: "Company B",
      logo: com,
    },
  ];

  return (
    <>
      <div className="lg:ml-[8%] border-t-4 border-blue-800 w-20 mb-4 ml-[40%]"></div>
      <h3 className="text-2xl lg:text-3xl font- mb-4 text-center lg:text-left py-4 px-2 lg:pl-[8%]">
        Meet the People
        <br />
        <b>We are Working With</b>
      </h3>

      <div className="flex items-center bg-gray-50 border justify-center overflow-hidden py-4 lg:px-10">
        <button
          className="text-black border focus:outline-none bg-gray-100 rounded-full p-2 lg:mr-4 flex items-center justify-center"
          onClick={handleScrollLeft}
        >
          {/* Left arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div
          className="flex"
          ref={containerRef}
          style={{
            scrollBehavior: "smooth",
            overflowX: "auto",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {companies.map((company) => (
            <div key={company.id} className="flex-none  m-2">
              {/* Adjusted logo size and removed background color */}
              <img
                src={company.logo}
                alt={company.name}
                className="h-[4rem] w-auto"
              />
            </div>
          ))}
        </div>
        <button
          className="text-black focus:outline-none bg-gray-100 border rounded-full p-2 flex items-center justify-center lg:ml-4"
          onClick={handleScrollRight}
        >
          {/* Right arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default MeetPeople;
