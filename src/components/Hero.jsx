import React from 'react'
import img from "../assets/frame.png"
import download from "../assets/download.png"
import user from "../assets/user.png"

const Hero = () => {
    return (
        <div className='h-[800px] w-full  mt-3 rounded-xl shadow-xl flex justify-evenly p-25'>

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

            <div className='w-200 h-150 rounded-[4rem] flex'>
                {/* calculator */}

                <div className='h-full w-2/3 rounded-l-4xl shadow-xl p-5 flex flex-col gap-5 '>
                    {/* bill section */}

                    <div className='flex flex-col gap-5 mb-3'>
                        <h2 className='text-xl font-bold text-gray-400'>BILL TOTAL</h2>

                        <input type="Number" placeholder='Enter your amount' className=' border-2 rounded-lg border-black/10 p-4 text-lg font-bold bg-gray-100 outline-none' />
                    </div>

                    <div className='flex flex-col gap-2 mb-6'>
                        {/* tip selection */}
                        <h2 className='text-xl font-bold text-gray-400'>SELECT TIP %</h2>

                        <div className='flex gap-10 justify-evenly flex-wrap'>
                            {/* tip amounts */}
                            <button className='p-6 text-xl font-bold border border-black/10 rounded-xl hover:bg-gray-200 cursor-pointer w-1/4'>10%</button>
                            <button className='p-6 text-xl font-bold border border-black/10 rounded-xl hover:bg-gray-200 cursor-pointer'>15%</button>
                            <button className='p-6 text-xl font-bold border border-black/10 rounded-xl hover:bg-gray-200 cursor-pointer'>18%</button>
                            <button className='p-6 text-xl font-bold border border-black/10 rounded-xl hover:bg-gray-200 cursor-pointer'>20%</button>
                            <button className='p-6 text-xl font-bold border border-black/10 rounded-xl hover:bg-gray-200 cursor-pointer'>Custom</button>

                        </div>


                    </div>

                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl font-bold text-gray-400'>NUMBER OF PEOPLE</h2>

                        <div className='flex p-4 justify-between w-full bg-gray-100 rounded-2xl items-center'>

                            <button className='p-2 px-4 border border-black/10 font-bold text-[1.5rem] rounded-xl '>-</button>

                            <div className='flex items-center gap-1'>
                                <img src={user} className='w-8' alt="" /><div className='text-2xl font-bold'>1</div>
                            </div>

                            <button className='p-2 px-4 border border-black/10 font-bold text-[1.5rem] rounded-xl '>+</button>

                        </div>

                    </div>

                </div>


                <div className='bg-[#0D9488] w-1/3  rounded-r-4xl shadow-xl'>


                </div>

            </div>


        </div>
    )
}

export default Hero