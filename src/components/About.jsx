import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#FBFCFE] text-[#838384]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 text-[#838384] '>
             about - all are welcome
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold'>
              <p>more on the way. . . </p>
            </div>
            <div>
              <p>soon this site will cover topics which will help you get to know me</p>
              <p>until then, I hope you feel welcome . . . because you are</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
