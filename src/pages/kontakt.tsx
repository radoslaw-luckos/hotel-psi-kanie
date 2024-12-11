import '../styles/globals.scss'
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>Kontakt</main>
    </Layout>
  )
}

export default ContactPage;