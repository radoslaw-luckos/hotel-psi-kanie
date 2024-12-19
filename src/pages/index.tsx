import '../styles/globals.scss'
import * as React from "react"
import {Link, type PageProps } from "gatsby"
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import { StaticImage } from 'gatsby-plugin-image'
import { IoPawSharp } from 'react-icons/io5'
import Reviews from '../components/Reviews'


const IndexPage: React.FC<PageProps> = () => {
  return <>
    <SEO/>
    <Layout>
      <section className="hero">
        <StaticImage src='..\images\hero_mobile.JPG' alt='Hero section image' className='hero__mobile-image'/>
        <StaticImage src='..\images\hero.JPG' alt='Hero section image' className='hero__image'/>
        <h1 className="title">Hotel dla psów <br/> pełen pasji i miłości</h1>
        <h2 className="subtitle">U nas Twój pupil <br/> poczuje się jak w domu</h2>
        <button className='button button--filled button--left'>
          <IoPawSharp className='button__icon'/>
          <Link className='button__text' to='/kontakt'>Skontaktuj się z nami!</Link>
        </button>
      </section>
      <section className="reviews">
          <h2 className="section-title">Zobacz jak widzą nas <br/>nasi Goście</h2>
          <Reviews/>
          <button className='button button--bordered button--right'>
            <IoPawSharp className='button__icon'/>
            <Link className='button__text' to='/oferta'>Sprawdź naszą ofertę</Link>
          </button>
      </section>
    </Layout>
  </>;
}

export default IndexPage;
