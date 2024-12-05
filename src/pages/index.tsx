import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import InBuildComponent from "../components/InBuildComponent"
import '../styles/base/reset.scss'
import '../styles/pages/index.scss'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <InBuildComponent/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
