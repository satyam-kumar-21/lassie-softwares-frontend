import React from "react";
import arr from "../../../src/Image/arrow.png";
const Slider = ({ item }) => {
  return (
    <>
      <div class={`container m-4 w-5/6 border overflow-hidden rounded-lg bg-${item.bg} md:w-5/6 md:flex-col lg:flex-row  flex flex-wrap mx-auto  p-0 lg:items-center lg:p-0 md:items-center md:p-3 `}>
        {/* left */}
        <div class="w-full md:w-2/5">
          <img className="w-full" src={item.img} alt="Image" class="w-full h-auto md:rounded-lg" />
        </div>

    {/* right */}
        <div class="w-full md:w-1/2 md:pl-5 mt-4 p-4 md:p-0  md:mt-6 md:ml-6  space-y-5">
          <h1 class="text-3xl font-bold text-gray-500 mb-4">{item.heading}</h1>
          <p class="text-gray-700 text-lg">{item.desc}</p>
          <div className="flex items-center justify-end hover:cursor-pointer">
            <p className="text-right  text-blue-700 font-semibold ">
              Read More
            </p>
            &nbsp;
            <img src={arr} width={18} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;