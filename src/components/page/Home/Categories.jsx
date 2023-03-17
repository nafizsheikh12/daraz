import React from 'react'
import watch from "../../../assets/watch.jpg";
import Image from 'next/image';
import CategoriesCard from './all card/CategoriesCard';

const categories = [
    {
       title:"FASHION",
       image: watch
    },
    {
        title:"FASHION",
        image: watch
     },
     {
        title:"FASHION",
        image: watch
     },
     {
        title:"FASHION",
        image: watch
     },

     {
        title:"FASHION",
        image: watch
     },
     {
        title:"FASHION",
        image: watch
     },
     {
        title:"FASHION",
        image: watch
     },
     {
        title:"FASHION",
        image: watch
     },
     {
        title:"FASHION",
        image: watch
     },

     {
        title:"FASHION",
        image: watch
     },
     {
        title:"FASHION",
        image: watch
     },
     {
        title:"FASHION",
        image: watch
     },
]

const Categories = () => {
  return (
    <>
    <div className='md:container mx-auto px-2 lg:px-8 mb-8'>
         <h3 className='text-[#424242] text-2xl mb-3'>Categories</h3>

         <div className='grid  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 bg-white'>
              {
                categories.map((item) => (
                    <CategoriesCard key={item.title} item={item}/> 
                ))
              }
         </div>

    </div>
  </>  
  )
}

export default Categories