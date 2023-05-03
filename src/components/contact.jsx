import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
            <form action="https://getform.io/f/22e2a7aa-5875-4f84-9d0c-7782f8c7f198" method='POST' className='flex flex-col max-w-xl w-full'>
                <div className='pb-8'>
                    <p className='text-3xl font-bold inline border-b-4 border-pink-600 text-white'>Contact</p>
                    <p className='text-[#8892b0] py-4'>// Submit form below or through email - fahri279@gmail.com</p>
                </div>

                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6] ' type="text" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>

                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' >Contact</button>

            </form>
        </div>
    )
}

export default Contact