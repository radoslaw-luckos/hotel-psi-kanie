import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { FaFlag, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import '../styles/components/InBuildComponent.scss'
import { Link } from 'gatsby';

type Props = {}

const InBuildComponent = (props: Props) => {
  return (
    <section className='infoBox'>
        <div className="infoBox-logo">
          <StaticImage src="../images/logo.png" alt={''} height={200}/>
        </div>
        <h1 className="infoBox-title"><span className='important'>Hau, hau! Strona w budowie!</span><br/><br/>
        Cześć! Tu zespół psiego hotelu Kanie. </h1>
        <h2 className='infoBox-subtitle'>
          Intensywnie merdamy ogonami i pracujemy, żeby stworzyć stronkę bardziej wypasioną niż miska pełna smaczków! 
          <br/>Spokojnie - nasz hotel już działa. Jesteśmy gotowi do przyjęcia Twoich futrzastych przyjaciół! 
        </h2>
        <div className="infoBox-contactInfo">
        <h2 className='infoBox-subtitle'>Zapraszamy do kontaktu:</h2>
          <div className="contact-item">
            <FaFlag className="icon" />
            <div className="text">
              <p>ul. Wspólna 10</p>
              <p>05-805 Kanie</p>
            </div>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <div className="text">
              <p>Sylwia Hawranek-Wińska <span className='important'>508-154-332</span></p>
              <p>Bartłomiej Wiński <span className='important'>502-694-979</span></p>
            </div>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <div className="text">
              <p>psi.hotel.kanie@gmail.com</p>
            </div>
          </div>
          <h2 className='infoBox-subtitle'>... oraz na nasze media społecznościowe!</h2>
          <div className="contact-item">
            <a href='https://www.facebook.com/people/Psi-hotel-Kanie/61566101737459/?__mmr=1&_rdr' target='blank'><FaFacebook className="icon big clickable" /></a>
            <a href='https://www.instagram.com/psi_hotel_kanie/' target='blank'><FaInstagram className='icon big clickable' /></a>      
          </div>
        </div>
    </section>
  )
}

export default InBuildComponent