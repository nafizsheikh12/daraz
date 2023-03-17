import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider1 from "../../../assets/slider1.jpg"
import Image from 'next/image';

const Slider = () => {
    const [color, setcolor] = useState()
    return (
        <div className='mt-[1rem]'>
            <div className=' md:container mx-auto px-2 lg:px-8 flex relative  '>
                <div className='bg-[#fff] w-[233px] md:block hidden p-2 text-[#757575] text-[13px]' style={{ boxShadow: "0 0 2px 0 rgba(0,0,0,.25)" }}>
                    <ul>
                        <li className='hover:text-[red] group cursor-pointer py-[4px]'>
                            <a>Hello world</a>
                            <div className='bg-[#fff] group-hover:block hidden w-[194px] h-full p-2  absolute z-50 top-[0] left-[234px] xl:left-[230px] lg:left-[222px] md:left-[200px]' style={{ boxShadow: "0 0 2px 0 rgba(0,0,0,.25)" }}>
                                <ul className='text-[#757575] text-[13px]'>
                                    <li className='hover:text-[red] cursor-pointer'>
                                        <a>Hello world</a>
                                    </li>
                                    <li>
                                        <a>Hello world</a>
                                    </li>
                                    <li>
                                        <a>Hello world</a>
                                    </li>

                                    <li>
                                        <a>Hello world</a>
                                    </li>
                                    <li>
                                        <a>Hello world</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='hover:text-[red] cursor-pointer py-[4px]'>
                            <a>Hello world</a>
                        </li>
                        <li className='hover:text-[red] cursor-pointer py-[4px]'>
                            <a>Hello world</a>
                        </li>

                        <li className='hover:text-[red] cursor-pointer py-[4px]'>
                            <a>Hello world</a>
                        </li>
                        <li className='hover:text-[red] cursor-pointer py-[4px]'>
                            <a>Hello world</a>
                        </li>
                    </ul>
                </div>


                <Carousel style={{display:"flex",flex:"0.8"}} className="image__carousel w-full" showArrows={false} showStatus={false} showThumbs={false} selectedItem={false} showIndicators={true} infiniteLoop autoPlay={true}>

                    <Image src={Slider1} className="w-full h-full" />


                    <Image src={Slider1} />


                    <Image src={Slider1} />


                </Carousel>


            </div>
        </div>
    )
}

export default Slider