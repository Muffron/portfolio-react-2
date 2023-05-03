import React from 'react'
import UIIAdmisi from '../asset/projects/UIIAdmisi.png'
import RCT from '../asset/projects/RCT.png'

const Work = () => {
    return (
        <div name="work" className='w-full h-full  text-gray-300 bg-[#0a192f] '>
            <div className='max-w-[90%] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-3xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-2'>// Check out some of my recent work</p>
                </div>
            </div>

            <div className='max-w-[90%] grid sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto'>
                {/* Container */}
                <div style={{ backgroundImage: `url(${UIIAdmisi})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider '>
                            Laravel Lumen Web Services
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://admisi.uii.ac.id/landing">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>

                        </div>
                    </div>
                </div>

                {/* Container */}
                <div style={{ backgroundImage: `url(${RCT})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider '>
                            Laravel + Bootstrap Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://ruangciptateknologi.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>

                        </div>
                    </div>
                </div>





            </div>
        </div>
    )
}

export default Work