import Image from 'next/image'
import React from 'react'
import qr from "../../assets/qr.png"
import playstoreLogo from "../../assets/playstore.png";
import applestore from "../../assets/applestore.png";
import {TiSocialFacebookCircular} from "react-icons/ti"
import {AiOutlineInstagram} from "react-icons/ai";
import {RiYoutubeLine} from "react-icons/ri"

const Footer = () => {
  return (
   <>
    <footer className='bg-[#111926] pt-8'>
        <div className='md:container mx-auto px-6 lg:px-8 pt-[15] pb-[22px]'>
             <div className='grid grid-cols-12 gap-4 items-center'>
                   <div className='col-span-12 md:col-span-4 text-white'>
                        <h3 className='text-[2rem] font-semibold '>Evaly</h3>
                        <p className='py-4 text-sm'>Largest product search engine, maximum categorized online shopping mall and quickest home delivery system.</p>
                        <div className='flex items-center gap-4'>
                            <p className='text-lg'>Follow Us</p>
                            <div className='flex items-center gap-3'>
                                 <TiSocialFacebookCircular className='text-[26px]'/>
                                 <AiOutlineInstagram className='text-[26px]'/>
                                 <RiYoutubeLine className='text-[26px]'/>
                            </div>
                        </div>
                   </div>
                   <div className='col-span-12 md:col-span-4 text-white'>
                       <h3 class="mb-4 font-semibold">Contact Us</h3>
                       <p class="mb-2 text-sm">House #8, Road # 14, <br/> Dhanmondi, Dhaka-1209.</p>
                       <p class="mb-2 text-sm">Email: support@e-valy.com</p>
                   </div>
                   <div className='col-span-12 md:col-span-4'>
                        <div class="flex flex-col items-start md:items-center">
                            <h3 class="mb-4 font-semibold text-white">Get Evaly App</h3>
                            
                        </div>
                   </div>
             </div>
        </div>
    </footer>
    <div className='bg-[#222836] '>
         <div className='md:container mx-auto px-2 lg:px-8'>
              <div className='flex justify-center items-center py-4'>
                    <p className='text-[#5C676E] '>2023 E-valy.com Limited. All rights reserved.</p>
              </div>
         </div>
    </div>
   </> 
  )
}

export default Footer