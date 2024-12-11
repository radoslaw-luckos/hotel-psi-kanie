import * as React from "react"
import type {PageProps } from 'gatsby'
import Layout from '../components/Layout'
import SEO from "../components/SEO"

const AboutPage: React.FC<PageProps>  = () => {
  return (
    <>
      <SEO title="O nas" description="Dowiedz się więcej o naszym hotelu"/>
      <Layout>
        <main>O nas</main>
      </Layout>
    </>
    
  )
}

export default AboutPage;