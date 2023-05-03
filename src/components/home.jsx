import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            <div className='max-w-[75%] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-3xl sm:text-6xl font-bold text-white'>Muhammad Fachri Ramadhan</h1>
                <h2 className='text-3xl sm:text-6xl font-bold text-[#8892b0]'>Backend Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[75%]'>I'm a back end developer specializing in building backend apps. Currently, i'm focused on
                    building backend apps using Laravel Lumen and Golang.
                </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home