import '../styles/globals.scss'
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { StaticImage } from 'gatsby-plugin-image'

const GalleryPage: React.FC<PageProps> = () => {
  return (
    <>
      <SEO title='Galeria' description='Zobacz ja wygląda nasz hotel od środka! Zobacz zdjęcia!'/>
      <Layout>
        <h1 className="title">Galeria</h1>
        <section className='gallery'>
          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
              <Masonry>
                <StaticImage src='..\images\gallery\1.JPG' alt='Photo 1' className='gallery__image'/>
                <StaticImage src='..\images\gallery\2.JPG' alt='Photo 2' className='gallery__image'/>
                <StaticImage src='..\images\gallery\3.JPG' alt='Photo 3' className='gallery__image'/>
                <StaticImage src='..\images\gallery\4.JPG' alt='Photo 4' className='gallery__image'/>
                <StaticImage src='..\images\gallery\5.JPG' alt='Photo 5' className='gallery__image'/>
                <StaticImage src='..\images\gallery\6.JPG' alt='Photo 6' className='gallery__image'/>
                <StaticImage src='..\images\gallery\7.JPG' alt='Photo 7' className='gallery__image'/>
                <StaticImage src='..\images\gallery\8.JPG' alt='Photo 8' className='gallery__image'/>
                <StaticImage src='..\images\gallery\9.JPG' alt='Photo 9' className='gallery__image'/>
                <StaticImage src='..\images\gallery\10.JPG' alt='Photo 10' className='gallery__image'/>
                <StaticImage src='..\images\gallery\11.JPG' alt='Photo 11' className='gallery__image'/>
                <StaticImage src='..\images\gallery\12.JPG' alt='Photo 12' className='gallery__image'/>
                <StaticImage src='..\images\gallery\13.JPG' alt='Photo 13' className='gallery__image'/>
                <StaticImage src='..\images\gallery\14.JPG' alt='Photo 14' className='gallery__image'/>
                <StaticImage src='..\images\gallery\15.JPG' alt='Photo 15' className='gallery__image'/>
                <StaticImage src='..\images\gallery\16.JPG' alt='Photo 16' className='gallery__image'/>
                <StaticImage src='..\images\gallery\17.JPG' alt='Photo 17' className='gallery__image'/>
                <StaticImage src='..\images\gallery\18.JPG' alt='Photo 18' className='gallery__image'/>
                <StaticImage src='..\images\gallery\19.JPG' alt='Photo 19' className='gallery__image'/>
                <StaticImage src='..\images\gallery\20.JPG' alt='Photo 20' className='gallery__image'/>
                <StaticImage src='..\images\gallery\21.JPG' alt='Photo 21' className='gallery__image'/>
              </Masonry>
          </ResponsiveMasonry>
        </section>
      </Layout>
    </>
    
  )
}

export default GalleryPage;