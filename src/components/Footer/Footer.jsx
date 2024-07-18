import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
// import short from "../../../src/Image/logo short.png"
// import nanelogo from "../../../src/Image/Group 14-2.png"

const Footer = () => {
  return (
    <>
      <div className="flex  flex-col">
        <div className="flex flex-col md:flex-row md:justify-between lg:mx-12 mx-4 my-2">
          <div className=" p-4  mb-4 md:mb-0 md:mr-4 space-y-3">
            <span> <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* <img src={short} className="h-8 " alt="Hi-tech Logo" />
          <span><img src={nanelogo} className="h-8 w-[6rem]" alt="Logo" /></span> */}

              <h1 className='text-2xl font-bold'>Logo</h1>
            </Link></span> <br />

            <p className="text-xl">
              Unlock your tech potential with <br />Lassie Softwares: Where innovation meets<br /> excellence, creating solutions <br />tailored for your success.
            </p>
          </div>
          <div className="   p-4 mb-4 md:mb-0 md:mx-4 space-y-2">
            <h3 className="font-bold">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/our-services">Services</Link></li>

              <li><Link to="/how-it-works">How it works</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/career">Careers</Link></li>
            </ul>
          </div>
          <div class="p-4 space-y-3">
            <h3 className="font-bold">Contact Us</h3>
            <p className="text-lg">
              Get in touch with us for inquiries<br /> or assistance.
            </p>
            <p>+91 7290007424</p>
            <p>+91 6203176139</p>
          </div>
        </div>
        <hr></hr>
        <hr></hr>
        <div className="flex justify-between mt-2 items-center lg:pb-10  text-center px-12 space-y-3 md:space-y-0 py-3 md:py-0 flex-col md:flex-row">
          <div>
            <p>&copy;2024 Copyright lassiesoftwares.com.All right reserved. </p>
          </div>
          <div className="flex space-x-2">
            <div className="shadow-xl p-1 rounded-full">
              <a href="https://www.facebook.com/"><Icon icon="ei:sc-facebook" className="size-8" /></a>
            </div>
            <div className="shadow-xl p-1 rounded-full">
              <a href="#"><Icon icon="ei:sc-twitter" className="size-8" /></a>
            </div>
            <div className="shadow-xl p-1 rounded-full">
              <a href="#"><Icon icon="ei:sc-instagram" className="size-8" /></a>
            </div>
            <div className="shadow-xl p-1 rounded-full">
              <a href="https://www.linkedin.com/"><Icon icon="ei:sc-linkedin" className="size-8" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
