import '../styles/globals.scss'
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import { IoFlagSharp, IoMail } from 'react-icons/io5'
import { HiPhone } from 'react-icons/hi2'
import ContactForm from '../components/ContactForm'
import { GoogleReCaptchaProvider } from  'react-google-recaptcha-v3';

const ContactPage: React.FC<PageProps> = () => {
  return (
    <>
      <SEO title='Kontakt' description='Skontaktuj się z nami!'/>
      <Layout>
      <h1 className="title">Kontakt</h1>
      <section className="contact">
        <p className='text'>Jeśli chcesz dokonać rezerwacji lub masz pytania dotyczące naszego hotelu - nie krępuj się! Skontaktuj się z nami przez nasz formularz kontaktowy lub zadzwoń!</p> 
        <div className="contact-form">
          <GoogleReCaptchaProvider reCaptchaKey='6LepKr0qAAAAAGiz1B293krwx301g1bWl7ZR7-ED'>
            <ContactForm />
          </GoogleReCaptchaProvider>
          <div className='contact-form__info'>
            <div className="option">
              <IoFlagSharp/>
              <p>Wspólna 10<br/>05-805 Kanie</p>
            </div>
            <div className="option">
              <HiPhone/>
              <p>+48 502 694 979<br/>+48 508 154 332</p>
            </div>
            <div className="option">
              <IoMail/>
              <p>psi.hotel.kanie@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      <section className='map'>
      <iframe
      className='map__container'
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD9p3YduqXTJAOhDq9QomgDM-kmD_jYZqs&q=Psi+hotel+Kanie,Kanie+Poland"
      allowFullScreen>
    </iframe>
      </section>
      </Layout>
    </>
  )
}

export default ContactPage;