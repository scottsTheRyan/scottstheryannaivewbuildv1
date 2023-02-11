// this is holding code from Work.jsx video up to 1:09, https://www.youtube.com/watch?v=2kg0z1qNrkw


import React from 'react'
import css from '../assets/css.png'


const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-[#838384] bg-[#FBFCFE]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-[#838384] border-[#838384]'>projects</p>
                    <p className='py-6'>i've worked on several projects and features, below are ones i'd like to show you</p>
                </div>

                {/* card */}
                <div style={{backgroundImage: `url(${css})`}}
                className='grid sm:grid-cols-2 md: grid-cols-3 gap-4'>
                        <div className='shadow-lg shadow-[#838384] group container rounded-md flex justify-center items-center mx-auto content-div'>

                                {/* hover */}
                                <div>
                                        <span>

                                        </span>
                                                <div>
                                                        <a href="/">
                                                                        <button>

                                                                        </button>
                                                        </a>
                                                        <a href="/">
                                                                        <button>

                                                                        </button>
                                                        </a>
                                                </div>

                                </div>


                        </div>
                </div>


            </div>
        </div>
    )
}

export default Work
