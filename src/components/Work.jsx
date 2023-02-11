import React from 'react';

import eob from '../assets/eob.png';


const Work = () => {
    return (
      <div name='projects' className='w-full h-screen bg-[#FBFCFE] text-[#838384]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 text-[#838384] '>projects</p>
                <p className='py-4'>please be patient, more to come . . . </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={eob} alt="React icon" />
                    <p className='my-4'>eCommerce</p>
                    <div className='pt-2 text-center'>
                <a href='https://endofthebeginningmvp.netlify.app/'>
                    <button className='text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg'>
                        Demo
                    </button>
                </a>
                <a href='https://github.com/scottsTheRyan/endofthebeginningtest'>
                    <button className='text-center border-b-4 rounded-md px-3 py-2 m-2 bg-[#FBFCFE] text-[#838384] text-lg'>
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
