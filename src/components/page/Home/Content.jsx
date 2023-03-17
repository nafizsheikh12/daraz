import Image from 'next/image'
import React from 'react'
import car from '../../../assets/car.png'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

const Content = () => {
  return (
    <>
       <div className='md:container mx-auto px-2 lg:px-8 py-5'>
             <div className='grid md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5'>
                  <div className='group flex gap-2 items-center bg-white p-1 rounded-full cursor-pointer hover:shadow'>
                        <Image src={car} className="w-[32px] h-[32px]"/>
                        <p className='font-normal group-hover:text-[#F6A623]'>Free Delivery</p>
                        <div className='ml-auto'>
                            <MdOutlineKeyboardArrowRight className='text-[27px] text-[#F6A623] hidden group-hover:block'/>
                        </div>
                  </div>
                  <div className='group flex gap-2 items-center bg-white p-1 rounded-full cursor-pointer hover:shadow text-center'>
                        <Image src={car} className="w-[32px] h-[32px]"/>
                        <p className='font-normal group-hover:text-[#F6A623]'>Free Delivery</p>
                        <div className='ml-auto'>
                            <MdOutlineKeyboardArrowRight className='text-[27px] text-[#F6A623] hidden group-hover:block'/>
                        </div>
                  </div>
                  <div className='group flex gap-2 items-center bg-white p-1 rounded-full cursor-pointer hover:shadow'>
                        <Image src={car} className="w-[32px] h-[32px]"/>
                        <p className='font-normal group-hover:text-[#F6A623]'>Free Delivery</p>
                        <div className='ml-auto'>
                            <MdOutlineKeyboardArrowRight className='text-[27px] text-[#F6A623] hidden group-hover:block'/>
                        </div>
                  </div>
                  <div className='group flex gap-2 items-center bg-white p-1 rounded-full cursor-pointer hover:shadow'>
                        <Image src={car} className="w-[32px] h-[32px]"/>
                        <p className='font-normal group-hover:text-[#F6A623]'>Free Delivery</p>
                        <div className='ml-auto'>
                            <MdOutlineKeyboardArrowRight className='text-[27px] text-[#F6A623] hidden group-hover:block'/>
                        </div>
                  </div>
                  <div className='group flex gap-2 items-center bg-white p-1 rounded-full cursor-pointer hover:shadow'>
                        <Image src={car} className="w-[32px] h-[32px]"/>
                        <p className='font-normal group-hover:text-[#F6A623]'>Free Delivery</p>
                        <div className='ml-auto'>
                            <MdOutlineKeyboardArrowRight className='text-[27px] text-[#F6A623] hidden group-hover:block'/>
                        </div>
                  </div>
             </div>
       </div>
    </>
  )
}

export default Content