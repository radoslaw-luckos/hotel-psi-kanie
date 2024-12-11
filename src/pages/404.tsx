import * as React from "react"
import {HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"


const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <SEO title="Strona nie istnieje" description="Zabłądziłeś. Podana strona nie istnieje!"/>
      <Layout>
        <main>
          Nie istnieje
        </main>
      </Layout>
    </>
   
    
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
