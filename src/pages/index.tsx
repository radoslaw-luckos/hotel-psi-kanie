import '../styles/globals.scss'
import * as React from "react"
import type {PageProps } from "gatsby"
import Layout from "../components/Layout"
import SEO from '../components/SEO'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <SEO/>
      <Layout>
        <main>Home</main>
      </Layout>
    </>
    
  )
}

export default IndexPage;
