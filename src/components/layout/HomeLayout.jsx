import React from 'react'
import Footer from '../shared/Footer'
import Header from '../shared/Header'

const HomeLayout = ({children}) => {
  return (
    <>
      <Header/>
        {children}
      <Footer/>  
    </>
  )
}

export default HomeLayout