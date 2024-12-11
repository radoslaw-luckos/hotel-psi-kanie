import React, { ReactComponentElement, ReactElement } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
    children: any
}

const Layout = ({children}:Props) => {
  return (
    <div className='layout'>
        <Navbar/>
        <div className="content">
            {/* content for each page */}
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout