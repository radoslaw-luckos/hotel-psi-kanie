import '../styles/globals.scss'
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"

const GalleryPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>Galeria</main>
    </Layout>
  )
}

export default GalleryPage;