import React from "react";
import img1 from "../../../src/Image/way1.png";
import img2 from "../../../src/Image/way2.png";
import img3 from "../../../src/Image/way3.png";
import Min_grate_soft from "./Min_grate_soft";

const Main_grate_soft = () => {
  const content = [
    {
      img1: img1,
      heading: "Clear Vision and Planning",
      p1: "Start by defining a clear vision for your software, understanding the problem you're solving, and setting goals aligned with user needs.",
      p2: "Conduct thorough research to gather requirements and plan the project scope, features, and milestones.",
      p3: "This phase lays the foundation for the entire development process.",
      bg: "graybg",
    },
    {
      img1: img2,
      heading: "Development with Quality Assurance",
      p1: "Write clean, modular, and maintainable code while following coding best practices and design patterns.",
      p2: "Implement thorough testing at various levels - unit, integration, and acceptance testing - to ensure the software meets quality standards.",
      p3: "Embrace an iterative development process, gathering feedback from users and iterating on the product continuously to improve its functionality and usability.",
      bg: "graybg",
    },
    {
      img1: img3,
      heading: "Deployment, Maintenance, and Continuous Improvement",
      p1: "Prepare your software for deployment in the production environment, automate deployment processes, and monitor the software post-deployment to identify and address any issues promptly.",
      p2: "Provide ongoing support to users, address bug fixes, and release updates regularly.",
      p3: "Foster a culture of continuous improvement within your team, reflecting on the development process regularly, and looking for areas to innovate and enhance the software.",
      bg: "graybg",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center bg-gray-50 py-4 ">
        <div className="lg:text-2xl flex flex-col space-y-2 items-center my-4">
          <span className="block  w-12 h-1 bg-blue-700" />
          <p>Way of building </p>
          <h3 className="font-bold">Great Software</h3>
        </div>
        <div>
          {content.map((item, idx) => {
            return <Min_grate_soft isRev={idx % 2} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Main_grate_soft;
