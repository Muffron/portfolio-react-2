import React from 'react'

import Bootstrap from '../asset/bootstrap.png'
import Github from '../asset/github.png'
import Golang from '../asset/golang.png'
import Lumen from '../asset/lumen.png'
import Nextjs from '../asset/nextjs.png'
import Reactimg from '../asset/react.png'
import Tailwind from '../asset/tailwind.png'

const Skills = () => {
    return (
        <div name="skills" className='w-full h-full bg-[#0a192f] text-gray-300'>
            <div className='max-w-[90%] mx-auto p-4 flex flex-col justify-cebter w-full h-full'>
                <div>
                    <p className='text-3xl font-bold inline border-b-4 border-pink-600 '>Experience</p>
                    <p className='py-4 '>// These are the technologies i've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap" />
                        <p className='py-4'>Bootstrap</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Github} alt="Github" />
                        <p className='py-4'>Github</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Golang} alt="Golang" />
                        <p className='py-4'>Golang</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto h-[50%]' src={Lumen} alt="Lumen" />
                        <p className='py-4'>Lumen</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Nextjs} alt="Next.js" />
                        <p className='py-4'>Next.js</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Reactimg} alt="React" />
                        <p className='py-4'>React</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind" />
                        <p className='py-4'>Tailwind</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills