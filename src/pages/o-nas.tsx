import * as React from "react"
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '../components/Layout'

const AboutPage: React.FC<PageProps>  = () => {
  return (
    <Layout>
      <main>O nas</main>
    </Layout>
  )
}

export default AboutPage;