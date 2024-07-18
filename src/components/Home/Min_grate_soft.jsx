
import React from "react";
import img2 from "../../../src/Image/about/satyam pp.png";
const Min_grate_soft = ({ isRev , item }) => {
  return (
    <>
      <div class={`container m-4 w-5/6  overflow-hidden rounded-lg  md:w-5/6 md:flex-col ${isRev == 0 ? "lg:flex-row-reverse" : "lg:flex-row lg:ml-44"  } justify-evenly  flex flex-wrap mx-auto  p-0 lg:items-center lg:p-0 md:items-center md:p-3 `}>
        {/* left */}
        <div class="w-full md:w-2/5">
          <img className="w-full" src={item.img1} alt="Image" class="w-full h-auto md:rounded-lg" />
        </div>

    {/* right */}
        <div className="w-full md:w-1/2 md:pl-5 mt-4 p-1 md:p-0  md:mt-6 md:ml-6  ">   
    <div className=" p-1 md:p-6 lg:p-8  space-y-4 ">
    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">{item.heading}</h3>
    <p className="text-lg md:text-base lg:text-lg  ">{item.p1}</p>
    <p className="text-lg md:text-base lg:text-lg ">{item.p2}</p>
    <p className="text-lg md:text-base lg:text-lg border-l-2 border-blue-700 pl-2"><i className="text-blue-600">{item.p3}</i></p>
    
    <div className="flex pt-2 items-center space-x-2">
      <div>
      <img class="rounded-full" width="22" height="22" src={img2} alt="CEO img" />

      </div>
      <div>
          <h3 className="font-semibold">Satyam kumar</h3>
          <p className="text-sm">CEO </p>
      </div>
    </div>
    
    </div>

        </div>
      </div>
    </>
  );
};

export default Min_grate_soft;