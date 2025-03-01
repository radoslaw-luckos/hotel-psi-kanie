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
          {/* <GoogleReCaptchaProvider reCaptchaKey='6LeiSbcqAAAAAOhy49bJaVnH61exTjwsU86WjyIq'>
            <ContactForm />            
          </GoogleReCaptchaProvider> */}
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdJ4_4Zf4iCQ0YGRqUxtMlo6ia3GKv6y6coxO1H53w8d9bgtw/viewform?embedded=true" className='form contact-form__google-form'>Trwa ładowanie formularza…</iframe>
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
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBjKMhx1l9tMyq1eh9MBVQz6fCg5pa-KoQ&q=Psi+hotel+Kanie,Kanie+Poland"
      allowFullScreen>
      </iframe>
      </section>
      </Layout>
    </>
  )
}

export default ContactPage;