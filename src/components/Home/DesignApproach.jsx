import React from "react";
import DesignApproachCard from "./DesignApproachCard";
import img1 from "../../../src/Image/ux-driven.png"
import img2 from "../../../src/Image/developing-shared.png"
import img3 from "../../../src/Image/Proven.png"
import img4 from "../../../src/Image/security.png"
import img5 from "../../../src/Image/code reviews.png"
import img6 from "../../../src/Image/quality.png"

function DesignApproach() {
  return (
    <>
      <div className="flex flex-col items-center bg-white py-4">
        <div className="lg:text-2xl flex flex-col space-y-2 items-center my-4">
          <span className="block  w-12 h-1 bg-blue-700" />
          <p>Our innovative</p>
          <h3 className="font-bold">approach to design and development</h3>
        </div>
        
        <div className="flex lg:mx-10 mx-1 space-x-10 lg:flex-row flex-col">
          <DesignApproachCard logo={img1} heading="UX-Driven Development" desc="We prioritize UX in every project, ensuring seamless design-to-code transformation led by our experienced designers."/>
          <DesignApproachCard logo={img2} heading="Building Shared Understanding" desc="We foster collaboration and understanding across teams to ensure unified goals and outcomes in our projects."/>
        </div>

        <div className="flex lg:mx-10 mx-1 space-x-10 lg:flex-row flex-col">
          <DesignApproachCard logo={img3} heading="Proven Expertise and Experience" desc="Backed by years of experience, we deliver robust solutions that meet the highest standards of quality and performance."/>
          <DesignApproachCard logo={img4} heading="Security and Intellectual Property (IP)" desc="We prioritize the security and protection of your intellectual property throughout the development lifecycle."/>
        </div>

        <div className="flex lg:mx-10 mx-1 space-x-10 lg:flex-row flex-col">
          <DesignApproachCard logo={img5} heading="Comprehensive Code Reviews" desc="We implement rigorous code review processes to ensure code quality, reliability, and maintainability."/>
          <DesignApproachCard logo={img6} heading="Quality Assurance and Testing" desc="Our dedicated QA team conducts thorough testing to deliver products that exceed expectations in reliability and performance."/>
        </div>
      </div>
    </>
  );
}

export default DesignApproach;
