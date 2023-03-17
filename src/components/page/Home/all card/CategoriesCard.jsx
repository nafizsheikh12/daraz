import React from 'react'
import Image from 'next/image'

const CategoriesCard = ({item}) => {
  return (
    <div>
         <div className='overflow-hidden hover:shadow-lg border-r border-[#e2e2e2] border-b p-7'>
                  <Image src={item.image} lassName="w-[80px] md:h-[80px] h-[80px]" height={450} quality={80}/>
                  <div className='mt-4 text-center text-[14px]'>
                        Fashion
                  </div>
         </div>
    </div>
  )
}

export default CategoriesCard