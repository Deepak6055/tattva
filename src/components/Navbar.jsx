import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

import {
  ArrowLeftRightIcon,
  FileDown,
  File,
  LayoutDashboard,
  HelpCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import RightArrowIcon from "./../assets/icons/rightArrow.svg";

const variants = {
  expanded: { width: "20%" },
  nonexpanded: { width: "6%" },
};

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-10 h-screen flex flex-col border border-r-1 bg-[#fc3d3d] relative" +
        (isExpanded ? " px-10" : " px-6")
      }
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] flex justify-center items-center"
      >
        <img src={RightArrowIcon} className="w-2" />
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] flex justify-center items-center"
      >
        <img src={RightArrowIcon} className="w-2" />
      </div>
      <div className="logo-div flex space-x-4 items-center bg ">
      <div className="">
      <span
      className={`${
        !isExpanded ? "hidden" : "block"
      } text-2xl font-semibold  p-8 rounded text-[#313030]`}
      style={{
        backgroundImage: "url(/images/bg.png)",
        backgroundSize: "contain",
        backgroundRepeat:"no-repeat", // Ensures the image covers the entire component
        backgroundPosition: "center", // Centers the image
      }}
    >
    <p className="p--2">Tattva</p>
  </span>
</div>

      </div>
      <div className="flex flex-col space-y-8 mt-12">
        <div className="nav-links w-full">
            <Link to="/">
              <button className="bg-[#fff42d] hover:bg-[#fc3d3d] text-black font-bold py-2 px-4 rounded flex items-center justify-center space-x-2">
                <LayoutDashboard />
                <span className={!isExpanded ? "hidden" : "block"}>
                 Dashboard
                </span>
              </button>
            </Link>
          </div>

        <div className="nav-links w-full">
            <Link to="/documentation">
              <button className="bg-[#fff42d] hover:bg-[#fc3d3d] text-black font-bold py-2 px-4 rounded flex items-center justify-center space-x-2">
                <File />
                <span className={!isExpanded ? "hidden" : "block"}>
                  Documentation
                </span>
              </button>
            </Link>
          </div>
        <div className="nav-links w-auto">
            <Link to="/installation">
              <button className="bg-[#fff42d] hover:bg-[#fc3d3d] text-black font-bold py-2 px-4 rounded flex items-center justify-center space-x-2">
                <FileDown />
                <span className={!isExpanded ? "hidden" : "block"}>
                Installation
                </span>
              </button>
            </Link>
          </div>
        <div className="nav-links w w-max">
            <Link to="/aboutus">
              <button className="bg-[#fff42d] hover:bg-[#fc3d3d] text-black font-bold py-2 px-4 rounded flex items-center justify-center space-x-2">
              <ArrowLeftRightIcon />
                <span className={!isExpanded ? "hidden" : "block"}>
                About us 
                </span>
              </button>
            </Link>
          </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
