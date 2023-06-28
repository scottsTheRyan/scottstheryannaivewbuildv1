import React from 'react';

import bug from '../assets/bug.png';
import conGo from '../assets/conGo.png';
import eob from '../assets/eob.png';
import makeNoise from '../assets/makeNoise.png';
import noteKeeper from '../assets/noteKeeper.png';
import OG from '../assets/OG.png';
import OGTech from '../assets/OGTech.png';
import riddick from '../assets/riddick.png';
import rollDice from '../assets/rollDice.png';
import scrumptious from '../assets/scrumptious.png';
import tinDog from '../assets/tinDog.png';
import twoShot from '../assets/twoShot.png';

const Work = () => {
    return (
      <div
        name="projects"
        className="w-full h-screen bg-[#FBFCFE] text-[#838384]"
      >
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 text-[#838384] ">
              projects
            </p>
            <p className="py-4">
              just getting started, more projects coming soon!!!{" "}
            </p>
          </div>

          {/* Grid item 1  */}

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={eob} alt="React icon" />
              <p className="my-4">End of TheBeginning</p>
              <p className="my-4">react - postman - airtable</p>
              <div className="pt-2 text-center">
                <a href="https://endofthebeginningmvp.netlify.app/">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/scottsTheRyan/endofthebeginningtest">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
            <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={conGo} alt="Conference Go" />
              <p className="my-4">ConferenceGo</p>
              <p className="my-4">react, django, rabbitmq</p>
              <div className="pt-2 text-center">
                <a href="https://github.com/scottsTheRyan/ConGo">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>

            <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src={scrumptious}
                alt="To Do To Do"
              />
              <p className="my-4">Scrumptious Hardening</p>
              <p className="my-4">
                registration, authentication, authorization
              </p>
              <div className="pt-2 text-center">
                <a href="https://github.com/scottsTheRyan/scrumptious_hardening">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>

            <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={riddick} alt="Riddick" />
              <p className="my-4">Riddick's Workout App</p>
              <p className="my-4">react, dynamic elements</p>
              <p className="my-4">rapid API</p>
              <div className="pt-2 text-center">
                <a href="https://endofthebeginningmvp.netlify.app/">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/scottsTheRyan/riddick">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>

            <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={noteKeeper} alt="NoteKeeper" />
              <p className="my-4">NoteKeeper</p>
              <p className="my-4">react, map, arrow functions</p>
              <div className="pt-2 text-center">
                <a href="https://scottstheryan.github.io/keeper_app_react_practice/">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/scottsTheRyan/keeper_app_react_practice">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>

            <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={tinDog} alt="TinDog" />
              <p className="my-4">TinDog - woof!</p>
              <p className="my-4">react, features, layouts, fun</p>
              <div className="pt-2 text-center">
                <a href="https://scottstheryan.github.io/tindog/">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/scottsTheRyan/rintintindog">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>

            <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={makeNoise} alt="Make Noise" />
              <p className="my-4">Make Some Noise</p>
              <p className="my-4">react, eventlisteners, noise! </p>
              <div className="pt-2 text-center">
                <a href="https://scottstheryan.github.io/ba_da_boom/">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/scottsTheRyan/ba_da_boom">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>

            <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={rollDice} alt="Roll Dice" />
              <p className="my-4">Roll the Dice</p>
              <p className="my-4">react, DOM, I was bored</p>
              <div className="pt-2 text-center">
                <a href="https://scottstheryan.github.io/family_feud/">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/scottsTheRyan/family_feud">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>

            <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={OGTech} alt="OG Tech" />
              <p className="my-4">Throwback Thurs </p>
              <p className="my-4">(in technicolor)</p>
              <p className="my-4">OG, html, css</p>
              <div className="pt-2 text-center">
                <a href="https://scottstheryan.github.io/OG_in_technicolor/">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/scottsTheRyan/OG_in_technicolor">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>

            <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={OG} alt="OG" />
              <p className="my-4">Throwback Thurs </p>
              <p className="my-4">OG, html, css</p>
              <div className="pt-2 text-center">
                <a href="https://scottstheryan.github.io/html_OG/">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/scottsTheRyan/html_OG">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>

            <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={bug} alt="Bug" />
              <p className="my-4">My FAV bug (wtf?!?!) </p>
              <p className="my-4">coming soon</p>

              <div className="pt-2 text-center">
                <a href="https://endofthebeginningmvp.netlify.app/">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/scottsTheRyan/endofthebeginningtest">
                  <button className="text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Work;
