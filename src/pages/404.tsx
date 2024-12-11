import * as React from "react"
import {HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"


const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        Nie istnieje
      </main>
    </Layout>
    
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
