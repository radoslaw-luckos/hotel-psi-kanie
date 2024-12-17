import React, { ReactComponentElement, ReactElement } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/globals.scss'
import { IoPawSharp } from "react-icons/io5";

type Props = {
    children: any;
    iconsCount: number;
}
const ICONS = [IoPawSharp];


const Layout = ({children, iconsCount = 50}:Props) => {

  const generateIconsBg = () => {

    const POSITIONS: { x: number; y: number; }[] = [];
    const generatePosition = () => {
      const x = Math.random() * 90 + 5; // Losowa pozycja w % z marginesem 5%
      const y = Math.random() * 90 + 5;

      // Sprawdzanie, czy współrzędne już istnieją
      const isTooClose = POSITIONS.some(pos => {
        const distance = Math.sqrt((pos.x - x) ** 2 + (pos.y - y) ** 2);
        return distance < 10;
      });

      if (isTooClose) {
        return generatePosition(); // Rekursja, gdy współrzędne są już zajęte
      } else {
        POSITIONS.push({x,y});
        return { x, y };
      }
    }

    return Array.from({ length: iconsCount }).map((_, index) => {
      const Icon = ICONS[Math.floor(Math.random() * ICONS.length)];
      const size = Math.random() * 100 + 20; // Losowy rozmiar od 20px do 70px
      const position = generatePosition()
      
      return (
        <Icon
          key={index}
          className="background-icon"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            position: "absolute",
            top: `${position?.y}%`,
            left: `${position?.x}%`,
            transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
            opacity: Math.random() * 0.25 + 0.1, // Przezroczystość od 0.1 do 0.35
          }}
        />
      );
    });
  };

  return (
    <div className='layout'>
        {generateIconsBg()}
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