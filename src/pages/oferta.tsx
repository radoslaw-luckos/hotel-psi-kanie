import '../styles/globals.scss'
import * as React from "react"
import {Link, type PageProps } from "gatsby"
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import { IoPawSharp, IoCar, IoTennisball, IoFitness, } from 'react-icons/io5'
import { PiHandHeart } from "react-icons/pi";
import { MdForest } from "react-icons/md";
import OfferCard from '../components/OfferCard'


const OfferPage: React.FC<PageProps> = () => {
  return (
    <>
    <SEO title='Oferta' description='Zapoznaj się z nasza ofertą'/>
    <Layout>
      <section className="offer">
        <h1 className="title">Oferta</h1>
        <h2 className="subtitle">Psi hotel Kanie - komfort, zabawa i troska.<br/>
        W naszym hotelu Twój pies poczuje się jak w raju!
        </h2>
        <p className='paragraph'>W ramach opłaty za pobyt oferujemy: </p>
        <ul>
          <OfferCard Icon={MdForest} title='Spacery po lesie' text='Każdy pies zasługuje na dawkę natury.'/>
          <OfferCard Icon={PiHandHeart} title='Zabiegi pielęgnacyjne' text='Kąpiel, czesanie, obcinanie pazurków. Twój pies będzie lśnił!'/>
          <OfferCard Icon={IoTennisball} title='Zabawy' text='Aportowanie, siłowanie i... najważniejsze: przytulanie, głaskanie oraz
    tarmoszenie.'/>
          <OfferCard Icon={IoFitness} title='Opieka medyczna' text='Zmiany opatrunków, kroplówki, podawanie leków – wykwalifikowana
    pielęgniarka zadba o zdrowie pupila.'/>
          <OfferCard Icon={IoCar} title='Transport' text='Odbierzemy i odwieziemy psa do domu, a także do weterynarza w razie
    potrzeby.'/>
        </ul>
        <p className='paragraph'>To wszystko <span className='important'>gratis</span>! Twój ulubieniec będzie zachwycony!</p>
        <button className='button button--bordered button--right'>
          <IoPawSharp className='button__icon'/>
          <Link className='button__text' to='/cennik'>Zobacz nasz cennik</Link>
        </button>
      </section>
    </Layout>
    </>
    
  )
}

export default OfferPage;