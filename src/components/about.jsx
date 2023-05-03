import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[90%] w-full grid grid-cols-2 gap-8'>
                    <div className='pb-8 pl-4 sm:text-right '>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[90%] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold inline'>
                        <p>Hi, i'm Rama. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I am a 4th year undergraduate student majoring on Informatics in Universitas Islam Indonesia.
                            Currently i'm specializing on building Backend web services using <span className='font-bold text-red-500'>Laravel Lumen</span> and <span className='font-bold text-cyan-300'>Golang</span>, although
                            currently i'm also learning to become a Fullstack developer using <span className='font-bold text-[#61DBFB]'>React</span> and <span className='font-bold text-[#5e7693
]'>Next.js</span> on the Frontend side.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About