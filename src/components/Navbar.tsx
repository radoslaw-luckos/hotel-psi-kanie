import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { IoMenu, IoClose, IoPawSharp, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

type Props = {}

const Navbar = (props: Props) => {

  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
    <nav className='navbar'>
        <div className="navbar__logo">
          <StaticImage src="../images/logo-big.svg" alt='Logo - Psi Hotel Kanie'/>
        </div>
        <div className="navbar__hamburger" onClick={()=>setMenuOpened(!isMenuOpened)}>
            {isMenuOpened ? <IoClose/> : <IoMenu/>}
        </div>
        {isMenuOpened && <ul className="navbar__menu--mobile">
          <Link className='link' activeClassName='link--active' to='/'><IoPawSharp className='icon'/>Strona główna</Link>
          <Link className='link' activeClassName='link--active' to='/o-nas'><IoPawSharp className='icon'/>O nas</Link>
          <Link className='link' activeClassName='link--active' to='/oferta'><IoPawSharp className='icon'/>Oferta</Link>
          <Link className='link' activeClassName='link--active' to='/cennik'><IoPawSharp className='icon'/>Cennik</Link>
          <Link className='link' activeClassName='link--active' to='/galeria'><IoPawSharp className='icon'/>Galeria</Link>
          <Link className='link' activeClassName='link--active' to='/kontakt'><IoPawSharp className='icon'/>Kontakt</Link>
          <section className="socials">
            <StaticImage className='socials__logo' src="../images/logo-big.svg" alt='Logo - Psi Hotel Kanie'/>
            <div className='socials__links'>
              <Link to='https://www.facebook.com/people/Psi-hotel-Kanie/61566101737459/?_rdr' target='blank'><IoLogoFacebook/></Link>
              <Link to='https://www.instagram.com/psi_hotel_kanie/' target='blank'><IoLogoInstagram/></Link>
            </div>
          </section>
        </ul>} 
        <div className="navbar__menu">
          <Link className='link' activeClassName='link--active' to='/'><IoPawSharp className='icon'/>Strona główna</Link>
          <Link className='link' activeClassName='link--active' to='/o-nas'><IoPawSharp className='icon'/>O nas</Link>
          <Link className='link' activeClassName='link--active' to='/oferta'><IoPawSharp className='icon'/>Oferta</Link>
          <Link className='link' activeClassName='link--active' to='/cennik'><IoPawSharp className='icon'/>Cennik</Link>
          <Link className='link' activeClassName='link--active' to='/galeria'><IoPawSharp className='icon'/>Galeria</Link>
          <Link className='link' activeClassName='link--active' to='/kontakt'><IoPawSharp className='icon'/>Kontakt</Link>
        </div>
        <div className='navbar__socials'>
              <Link to='https://www.facebook.com/people/Psi-hotel-Kanie/61566101737459/?_rdr' target='blank'><IoLogoFacebook/></Link>
              <Link to='https://www.instagram.com/psi_hotel_kanie/' target='blank'><IoLogoInstagram/></Link>
            </div>
    </nav>
  )
}

export default Navbar