import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import { IoMail, IoFlagSharp, IoLogoFacebook, IoLogoInstagram, IoPawSharp} from "react-icons/io5";
import { HiPhone } from 'react-icons/hi2'
import { Link } from 'gatsby';

type Props = {}

const Footer = (props: Props) => {

  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);


  const renderIcons = (): JSX.Element[] => {
    const numberOfIcons = Math.floor(windowWidth / 50);

    return Array.from({ length: numberOfIcons }, (_, index) => (
      <IoPawSharp key={index}/>
    ));
  };

  return (
    <footer className='footer'>
        <div className="paws">{renderIcons()}</div>
        <section className="contact">
          <div className="contact__option">
            <IoFlagSharp/>
            <p>Wspólna 10<br/>
            05-805 Kanie</p>
          </div>
          <div className="contact__option">
            <HiPhone/>
            <p>+48 502 694 979<br/>+48 508 154 332</p>
          </div>
          <div className="contact__option">
            <IoMail/>
            <p>psi.hotel.kanie@gmail.com</p>
          </div>
        </section>
        <section className="socials">
          <StaticImage className='socials__logo' src="../images/logo-big.svg" alt='Logo - Psi Hotel Kanie'/>
          <div className='socials__links'>
            <Link to='https://www.facebook.com/people/Psi-hotel-Kanie/61566101737459/?_rdr' target='blank'><IoLogoFacebook/></Link>
            <Link to='https://www.instagram.com/psi_hotel_kanie/' target='blank'><IoLogoInstagram/></Link>
          </div>
        </section>
        <p className="copyrights">
© Hotel Psi w Kaniach 2024. Wszystkie prawa zastrzeżone. Wdrożenie: Radosław Łuckoś</p>
    </footer>
  )
};

export default Footer