import React,{useRef,useState} from 'react'
import logo from "../../assets/logo/logo.png";
import Image from 'next/image';
import {BsCart3} from"react-icons/bs"
import {HiOutlineUser} from "react-icons/hi"
import {BiCategory} from "react-icons/bi"

const Header = () => {
  const [toggle, settoggle] = useState(false)

  const categoryOpen = () => {
    settoggle(!toggle)
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
          <div className='flex items-center'>
                <div className='w-[40px] ml-auto md:hidden'>
                    <BiCategory className='text-[24px] cursor-pointer' onClick={categoryOpen} />
                </div>
                <div className='w-[40px] ml-auto' >
                    <BsCart3 className='text-[27px]'/>
                </div>
                <div className='w-[40px] ml-auto'>
                    <HiOutlineUser className='text-[27px] cursor-pointer' />
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
      <div>
     {
       toggle && (
           <div id="dropdownNavbar"  className=" md:hidden  z-10 w-full font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                     <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                       <li>
                         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                       </li>
                       <li>
                         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                       </li>
                       <li>
                         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                       </li>
                     </ul>
                     <div className="py-1">
                       <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                     </div>
            </div>
          )
     }
      </div>
    </header> 
    </>
  )
}

export default Header