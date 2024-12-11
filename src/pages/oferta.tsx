import '../styles/globals.scss'
import * as React from "react"
import type {PageProps } from "gatsby"
import Layout from "../components/Layout"
import SEO from '../components/SEO'

const OfferPage: React.FC<PageProps> = () => {
  return (
    <>
    <SEO title='Oferta' description='Zapoznaj się z nasza ofertą'/>
    <Layout>
      <main>Oferta</main>
    </Layout>
    </>
    
  )
}

export default OfferPage;