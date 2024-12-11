import '../styles/globals.scss'
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import SEO from '../components/SEO'

const GalleryPage: React.FC<PageProps> = () => {
  return (
    <>
      <SEO title='Galeria' description='Zobacz ja wygląda nasz hotel od środka! Zobacz zdjęcia!'/>
      <Layout>
        <main>Galeria</main>
      </Layout>
    </>
    
  )
}

export default GalleryPage;