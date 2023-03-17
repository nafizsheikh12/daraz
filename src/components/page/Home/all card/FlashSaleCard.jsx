import React from 'react'
import Image from 'next/image'


const FlashSaleCard = ({item}) => {
  return (
    <div>
          <div className='overflow-hidden hover:shadow-xl mb-4'>
                     <Image src={item.productImg} className="w-full md:h-[188px] h-[293px]" height={450} quality={80}/>
                     <div className='mt-4 p-2'>
                           <p className='text-sm'>{item.title}</p>
                           <h3 className='text-[#f85606] my-[2px] text-[18px]'>{item.price}</h3>
                           <div className='mb-2 text-[12px]'>
                                <span className='line-through text-[#9e9e9e]'>$139</span>
                                <span> -62%</span>
                           </div>
                     </div>
           </div>
    </div>
  )
}

export default FlashSaleCard