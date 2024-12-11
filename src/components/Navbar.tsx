import { Link } from 'gatsby'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav>
        <Link to='/'>Strona główna</Link>
        <Link to='/o-nas'>O nas</Link>
        <Link to='/oferta'>Oferta</Link>
        <Link to='/cennik'>Cennik</Link>
        <Link to='/galeria'>Galeria</Link>
        <Link to='/kontakt'>Kontakt</Link>
    </nav>
  )
}

export default Navbar