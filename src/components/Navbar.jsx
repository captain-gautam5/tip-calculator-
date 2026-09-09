import React from 'react'
import img from '../assets/icon-caption_calculator icon.png'


const Navbar = () => {
    return (
        <div className='h-[72px] w-full  flex justify-between items-center shadow-lg rounded-2xl px-20 py-15'>

            <div className='flex gap-1 p-2'>
                {/* logo and logo img */}
                <h1 className='font-bold text-3xl'>Tippy</h1>
                <div className='bg-[#0D9488] rounded-lg p-1'>
                    <img src={img} className='w-8'
                        alt="" />

                </div>
                {/* */}

            </div>

            <div className='flex gap-15 text-xl font-semibold '>
                {/* navlinks */}
                <a href="" className='text-[#475569]'>Features</a>
                <a href="" className='text-[#475569]'>Tipping Etiquettes</a>
                <a href="" className='text-[#475569]'>FAQ</a>
                <a href="" className='text-[#475569]'>Integrations</a>

            </div>


            <div className='flex items-center gap-4'>
                {/* sign in and launch calculator btn */}
                <a href="/" className='text-xl font-semibold'>Sign In</a>
                <button className='bg-[#0D9488] text-white p-5 font-bold shadow-lg rounded-2xl text-xl cursor-pointer' >Launch Calculator</button>
            </div>

        </div>
    )
}

export default Navbar