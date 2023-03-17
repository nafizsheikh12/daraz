import React from 'react'
import FlashSaleImg from "../../../assets/flashsale.jpg";
import Image from 'next/image';
import JustForYouCard from './all card/JustForYouCard';

const jusforyou = [
     {
          title:"8.5 LCD Writing Tablet Drawing Pad, eregible e-writer, Office Writing Board",
          price: "155$",
          productImg:FlashSaleImg
     },
     {
          title:"8.5 LCD Writing Tablet Drawing Pad, eregible e-writer, Office Writing Board",
          price: "155$",
          productImg:FlashSaleImg
     },
     {
          title:"8.5 LCD Writing Tablet Drawing Pad, eregible e-writer, Office Writing Board",
          price: "155$",
          productImg:FlashSaleImg
     },
     {
          title:"8.5 LCD Writing Tablet Drawing Pad, eregible e-writer, Office Writing Board",
          price: "155$",
          productImg:FlashSaleImg
     },
     {
          title:"8.5 LCD Writing Tablet Drawing Pad, eregible e-writer, Office Writing Board",
          price: "155$",
          productImg:FlashSaleImg
     },
     {
          title:"8.5 LCD Writing Tablet Drawing Pad, eregible e-writer, Office Writing Board",
          price: "155$",
          productImg:FlashSaleImg
     },
     {
          title:"8.5 LCD Writing Tablet Drawing Pad, eregible e-writer, Office Writing Board",
          price: "155$",
          productImg:FlashSaleImg
     },
     {
          title:"8.5 LCD Writing Tablet Drawing Pad, eregible e-writer, Office Writing Board",
          price: "155$",
          productImg:FlashSaleImg
     },
]

const JustForYou = () => {
  return (
    <>
        <div className='md:container mx-auto px-2 lg:px-8 pb-3'>
            <h3 className='text-[#424242] text-2xl mb-3'>Just For You</h3>
            
            <div className='grid  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 pt-2  pb-4 gap-3'>
                 {
                    jusforyou.map((item) => (
                         <JustForYouCard key={item.title} item={item}/>
                    ))
                 }
            </div>
            <div className='m-3 flex justify-center'>
                <button className='border bottom-1 border-[#ff6801] text-[#ff6801] py-2 px-20'>
                     Load More
                </button>
            </div>
       </div>    
    </>
  )
}

export default JustForYou