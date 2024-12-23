import '../styles/globals.scss'
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import { IoFlagSharp, IoMail } from 'react-icons/io5'
import { HiPhone } from 'react-icons/hi2'
import ContactForm from '../components/ContactForm'


const ContactPage: React.FC<PageProps> = () => {
  return (
    <>
      <SEO title='Kontakt' description='Skontaktuj się z nami!'/>
      <Layout>
      <h1 className="title">Kontakt</h1>
      <section className="contact">
        <p className='text'>Jeśli chcesz dokonać rezerwacji lub masz pytania dotyczące naszego hotelu - nie krępuj się! Skontaktuj się z nami przez nasz formularz kontaktowy lub zadzwoń!</p> 
        <div className="contact-form">
          <ContactForm />
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
      </section>
      </Layout>
    </>
  )
}

export default ContactPage;