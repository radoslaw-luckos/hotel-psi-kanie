import * as React from "react"
import type {PageProps } from 'gatsby'
import Layout from '../components/Layout'
import SEO from "../components/SEO"
import { StaticImage } from "gatsby-plugin-image"
import Team from "../components/Team"


const AboutPage: React.FC<PageProps>  = () => {



  return (
    <>
      <SEO title="O nas" description="Dowiedz się więcej o naszym hotelu"/>
      <Layout>
        <h1 className="title">O nas</h1>
        <section className="desc">
          <p className="desc__paragraph"><span className="important">Psi hotel Kanie to kameralne miejsce, gdzie Twój pies poczuje się jak w domu.</span> Panuje tu rodzinna atmosfera. Nie mamy kojców ani boksów – psy poruszają się swobodnie. Zapewnia im to komfort i radość.</p>
          <p className="desc__paragraph"><span className="important">Do każdego gościa podchodzimy indywidualnie.</span> Traktujemy go wyjątkowo. Dostosowujemy opiekę do potrzeb oraz charakteru psiaka. Twój ulubieniec będzie otoczony troską i uwagą.
          </p>
          <p className="desc__paragraph"><span className="important">Z nami będziesz spokojny o swojego pupila.</span> Możesz zrelaksować się na wakacjach lub skupić na podróży służbowej. W tym czasie my zapewnimy Twojemu psu bezpieczeństwo i miły czas. Będzie w dobrych rękach.</p>
          <StaticImage className='desc__image' src="../images/onas.jpg" alt="Zdjęcie zespołu hotelu"/>
        </section>
        <Team/>
      </Layout>
    </>
    
  )
}

export default AboutPage;