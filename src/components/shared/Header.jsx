import React,{useRef} from 'react'
import logo from "../../assets/logo/logo.png";
import Image from 'next/image';
import {BsCart3} from"react-icons/bs"
import {HiOutlineUser} from "react-icons/hi"

const Header = () => {
  const navRef =useRef();

  const toggleRef = () => {
    navRef.current.classList.toggle("hidden")
  }
  return (
    <>
    <header className='fixed z-20 w-full bg-white top-0'>
      <div  className='md:container mx-auto lg:px-8 py-3 flex items-center gap-4 justify-between'>
          <div className='w-[200px]'>
               <Image  src={logo}  className="h-[41px] w-[135px]"/>
          </div>
          <div className='w-[90%] md:block xsm:hidden'>
                <form>
                    <div class="flex">
                        <label for="location-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                        <div class="relative w-full">
                            <input type="search" class="outline-0	 block p-3.5 w-full z-20 text-sm text-gray-900 bg-[#F5F5F5] rounded-r-lg focus:ring-blue-500 focus:border-blue-500"    placeholder="Search for city or address" required/>
                            <button type="submit" class="absolute top-0 right-0 p-3.5 text-sm font-medium text-white bg-[#F57224]   focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>
          </div>
          <div className='flex '>
                <div className='w-[40px] ml-auto' >
                    <BsCart3 className='text-[27px]'/>
                </div>
                <div className='w-[40px] ml-auto'>
                    <HiOutlineUser className='text-[27px] cursor-pointer' onClick={toggleRef}/>
                </div>
          </div>
      </div>
      <div className='md:container mx-auto  px-3 mb-5 md:hidden'>
                <form>
                    <div class="flex">
                        <label for="location-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                        <div class="relative w-full">
                            <input type="search" class="outline-0	 block p-3.5 w-full z-20 text-sm text-gray-900 bg-[#F5F5F5] rounded-r-lg focus:ring-blue-500 focus:border-blue-500"    placeholder="Search for city or address" required/>
                            <button type="submit" class="absolute top-0 right-0 p-3.5 text-sm font-medium text-white bg-[#F57224]   focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>
      </div>
    </header> 
    </>
  )
}

export default Header