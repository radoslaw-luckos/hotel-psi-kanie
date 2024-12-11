import '../styles/globals.scss'
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import SEO from '../components/SEO'

const PriceListPage: React.FC<PageProps> = () => {
  return (
    <>
        <SEO title='Cennik' description='Poznaj nasze ceny!'/>
        <Layout>
          <main>Cennik</main>
        </Layout>
    </>
    
  )
}

export default PriceListPage;