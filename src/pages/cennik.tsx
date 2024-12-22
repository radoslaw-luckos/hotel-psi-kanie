import '../styles/globals.scss'
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import InfoBullet from '../components/InfoBullet'

const PriceListPage: React.FC<PageProps> = () => {
  return (
    <>
        <SEO title='Cennik' description='Poznaj nasze ceny!'/>
        <Layout>
          <h1 className="title">Cennik</h1>
          <table className='prices-table'>
            <thead>
                <tr>
                    <th></th>
                    <th className='heading'>cena/dobę</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='category'>Mały pies(do 10 kg)</td>
                    <td className='price'>90 PLN</td>
                </tr>
                <tr>
                    <td className='category'>Średni pies (10-25 kg)</td>
                    <td className='price'>100 PLN</td>
                </tr>
                <tr>
                    <td className='category'>Duży pies (25-45 kg)</td>
                    <td className='price'>110 PLN</td>
                </tr>
                <tr>
                    <td className='category'>B. duży pies  (powyżej 45 kg)</td>
                    <td className='price'>140 PLN</td>
                </tr>
            </tbody>
          </table>
          <section className='info'>
              <ul className='info-list'>
                <InfoBullet text={<p>Cena za 2 lub więcej psów z tego samego domu w jednym pokoju ustalana jest <span className="important">indywidualnie.</span></p>}/>
                <InfoBullet text={<p>Doba hotelowa trwa <span className="important">24 godziny</span>, licząc od godziny przyjazdu psa do tej samej godziny następnego dnia. </p>}/>
                <InfoBullet text={<p>Aby dokonać rezerwacji, prosimy o wpłacenie <span className="important"> zaliczki w wysokości 30%</span>wartości pobytu pupila. </p>}/>
                <InfoBullet text={<p>Do hotelu przyjmujemy psy, które są <span className="important">przyjazne w stosunku do ludzi</span>. Akceptujemy także psy agresywne wobec innych zwierząt. Posiadamy pojedyncze pokoje.</p>}/>
                <InfoBullet text={<p>Przed pobytem prosimy o udostępnienie:</p>}>
                  <p><span className="important">Książeczkę zdrowia</span>, a w niej aktualne szczepienia oraz odrobaczenie (do trzech miesięcy wstecz);</p>
                  <p>Zamiast odrobaczenia, akceptujemy również <span className="important">wynik badania kału</span> na obecność pasożytów, nie
                  starszy niż miesiąc;</p>
                  <p><span className="important">Zabezpieczenie przeciwko kleszczom.</span></p>
                </InfoBullet>
                <InfoBullet text={<p>Zalecamy również, aby piesek posiadał:</p>}>
                  <p><span className='important'>Swoją karmę, przysmaki</span></p>
                  <p><span className='important'>Zabawki</span></p>
                  <p><span className='important'>Miska</span> (są psy, które preferują jeść wyłącznie ze swoich własnych naczyń)</p>
                  <p><span className='important'>Posłanie</span> (by pies czuł swój zapach, można dołączyć również starą koszulę właściciela lub inną
                    rzecz z jego zapachem)</p>
                </InfoBullet>
              </ul>
          </section>
        </Layout>
    </>
    
  )
}

export default PriceListPage;