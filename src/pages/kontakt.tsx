import '../styles/globals.scss'
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import SEO from '../components/SEO'

const ContactPage: React.FC<PageProps> = () => {
  return (
    <>
      <SEO title='Kontakt' description='Skontaktuj się z nami!'/>
      <Layout>
        <main>Kontakt</main>
      </Layout>
    </>
  )
}

export default ContactPage;