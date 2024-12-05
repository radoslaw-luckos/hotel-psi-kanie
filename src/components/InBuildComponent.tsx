import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { FaFlag, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../styles/components/InBuildComponent.scss'

type Props = {}

const InBuildComponent = (props: Props) => {
  return (
    <section className='infoBox'>
        <div className="infoBox-logo">
          <StaticImage src="../images/logo.png" alt={''}/>
        </div>
        <h1 className="infoBox-title"><span className='important'>Przepraszamy...</span><br/>Właśnie ciężko pracujemy nad naszą stroną!</h1>
        <h2 className='infoBox-subtitle'>Tymczasem zachęcamy do kontaktu!</h2>
        <div className="infoBox-contactInfo">
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
              <p>+48 508 154 332</p>
              <p>+48 502 694 979</p>
            </div>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <div className="text">
              <p>psi.hotel.kanie@gmail.com</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default InBuildComponent