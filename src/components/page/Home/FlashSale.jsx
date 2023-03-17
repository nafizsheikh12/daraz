import Image from 'next/image'
import React from 'react'
import FlashSaleImg from "../../../assets/flashsale.jpg"
import FlashSaleCard from './all card/FlashSaleCard'

const product = [
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
     {
          title:"8.5 LCD Writing Tablet Drawing Pad, eregible e-writer, Office Writing Board",
          price: "155$",
          productImg:FlashSaleImg
     },
]

const FlashSale = () => {
  return (
    <>
       <div className='md:container mx-auto xsm:px-2 lg:px-8 mb-8'>
            <h3 className='text-[#757575] text-2xl mb-3'>FlashSale</h3>
            <div className='flex bg-white py-3 px-4 justify-between items-center border-b border-[#d5d5d5]'>
               <div className='flex sm:gap-3  md:gap-7 lg:gap-12 items-center'>
                     <div className='text-[#f85606] text-sm font-medium'>
                         On Sale Now
                     </div>
                     <div className='flex gap-3 items-center'>
                           <div>
                                Ending in
                           </div>
                           <div className='flex items-center'>
                                <div className='bg-[#ff6801] py-1 px-2 text-white'>19</div> <div className='mx-1'>:</div>
                                <div className='bg-[#ff6801] py-1 px-2 text-white'>19</div> <div className='mx-1'>:</div>
                                <div className='bg-[#ff6801] py-1 px-2 text-white'>19</div>
                           </div>
                      </div>
                 </div>  
                 <div>
                           <button className='border bottom-1 border-[#ff6801] text-[#ff6801] py-2 px-2'>SHOP MORE</button>
                 </div>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 pt-2 bg-white pb-4 gap-3'>
               
                 {
                    product.map((item) => (
                       <FlashSaleCard item={item}/>
                    ))
                 }
            </div>
       </div>
    </>
  )
}

export default FlashSale