import '../styles/globals.scss'
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"

const PriceListPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>Cennik</main>
    </Layout>
  )
}

export default PriceListPage;