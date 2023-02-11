import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#FBFCFE]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text text-[#838384]">
        <p className="text-2xl sm:text-4x1 font-bold">nice to meet you</p>
        <h2>thank you for stopping by my first personal website</h2>
        <h2>over time i plan to build out several pages and features</h2>
        <h2>for now, make yourself comfy, take a look around </h2>

        <div>
        <Link to="projects" smooth={true} duration={500}>
          <button className="text-[#838384] border-2 px-6 py-1 my-2 flex items-center rounded-lg hover:bg-[#e9e9ec]">
            view projects
            <HiArrowNarrowRight className="ml-2" />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
