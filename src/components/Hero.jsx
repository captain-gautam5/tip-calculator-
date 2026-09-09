import React from 'react'
import img from "../assets/frame.png"
import download from "../assets/download.png"

const Hero = () => {
    return (
        <div className='h-[800px] w-full  mt-3 rounded-xl shadow-xl flex p-25'>

            <div className='flex flex-col gap-5 rounded-3xl  p-5 w-[1000px]'>
                {/* {about project} */}
                <div>
                    <img src={img} alt="" className='w-[300px] mt-3' />
                </div>

                <div className='ml-2 font-bold text-[5rem] w-[1000px] leading-25'>Split bills & tip with <br /> absolute precision</div>

                <div className='text-[1.5rem] '>
                    A beautifully designed, zero-friction calculator made for modern diners. Split any tab instantly, customize tips, and skip the awkward math at the end of the night.
                </div>

                <div className='p-2 flex gap-20 mt-5'>

                    <button className='bg-[#0D9488] text-white p-5 rounded-2xl flex items-center gap-3 cursor-pointer shadow-lg font-bold text-xl'>
                        <span><img src={download} className='w-5' alt="" /></span>
                        Save to Home Screen</button>

                    <button className='border-[0.5px] border- p-3 rounded-2xl text-lg font-semibold text-[#0D9488] cursor-pointer'>Learn Ettiquettes</button>

                </div>


            </div>

            <div>
                {/* calculator */}

            </div>


        </div>
    )
}

export default Hero