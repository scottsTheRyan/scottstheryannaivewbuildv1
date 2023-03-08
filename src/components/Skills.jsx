import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import postman from '../assets/postman.svg';
import aws from '../assets/aws.svg';
import react from '../assets/react.png';
import JavaScript from '../assets/javascript.png';
import Docker from '../assets/docker.png';
import Django from '../assets/django.png';
import GitHub from '../assets/github.png';
import MongoDB from '../assets/mongo.png';

const Skills = () => {
    return (
      <div name='skills' className='w-full h-screen bg-[#FBFCFE] text-[#838384]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 text-[#838384] '>Skills</p>
                <p className='py-4'>below are a few technologies I work with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="React icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Docker} alt="Docker icon" />
                    <p className='my-4'>Docker</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Django} alt="Django icon" />
                    <p className='my-4'>Django</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={postman} alt="Postman icon" />
                    <p className='my-4'>Postman</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MongoDB} alt="Mongo DB icon" />
                    <p className='my-4'>MongoDB</p>
                </div>
            </div>
        </div>
      </div>
    );
  };

  export default Skills;
