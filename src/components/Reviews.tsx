import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { PiSkipForwardBold, PiSkipBackBold } from "react-icons/pi";
import { IoPawSharp } from 'react-icons/io5';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";



type Props = {
}

const Reviews = (props: Props) => {

  const REVIEWS = [
    {
        photoUrl: '..\images\gosia.jpg',
        name: 'Małgorzata Lorenc',
        text: 'Obawiałam się głównie lęku separacyjnego u Meli. Mela jest pieskiem lękowym.Na sytuacje stresujące reaguje szczekaniem i naprężeniem całego ciała. Bardzo bałam się, że zostanie odebrana jako "agresywny" pies. Bałam sie też, że zwyczajnie zabraknie Wam cierpliwości. Mele zmęczyć jest trudno, wyciszona bywa tylko w domu 🙂 Przekonało mnie Twoje podejście do zwierząt. Po naszej adaptacyjnej wizycie byłam przekonana, że Mela będzie w odpowiednich rękach. Dyscyplina i miłość to to, czego moja sunia potrzebuje.Podobało mi się dostosowanie do Meli potrzeb - długie spacery, mizianko, poświęcona uwaga. Jak widziałam Wasze zdjęcia serce mi rosło! Widziałam, że Melcia w pełni Cie zaakceptowała.Gdybym miała jeszcze raz decydować, chętnie pozostawiłabym Melanię pod Waszą opieką. Chociaż nie jestem w 100% przekonana czy Mela nadaje sie do takiej formy opieki. Beze mnie zostawała tylko u nas w domu, w bezpiecznych kątach. Myślę, że każdy kolejny raz byłby łatwiejszy dla nas wszystkich 🙂'
    },
    {
        photoUrl: 'src\images\gosia.jpg',
        name: 'Małgorzata Lorenc2',
        text: 'Obawiałam się głównie lęku separacyjnego u Meli. Mela jest pieskiem lękowym.Na sytuacje stresujące reaguje szczekaniem i naprężeniem całego ciała. Bardzo bałam się, że zostanie odebrana jako "agresywny" pies. Bałam sie też, że zwyczajnie zabraknie Wam cierpliwości. Mele zmęczyć jest trudno, wyciszona bywa tylko w domu 🙂 Przekonało mnie Twoje podejście do zwierząt. Po naszej adaptacyjnej wizycie byłam przekonana, że Mela będzie w odpowiednich rękach. Dyscyplina i miłość to to, czego moja sunia potrzebuje.Podobało mi się dostosowanie do Meli potrzeb - długie spacery, mizianko, poświęcona uwaga. Jak widziałam Wasze zdjęcia serce mi rosło! Widziałam, że Melcia w pełni Cie zaakceptowała.Gdybym miała jeszcze raz decydować, chętnie pozostawiłabym Melanię pod Waszą opieką. Chociaż nie jestem w 100% przekonana czy Mela nadaje sie do takiej formy opieki. Beze mnie zostawała tylko u nas w domu, w bezpiecznych kątach. Myślę, że każdy kolejny raz byłby łatwiejszy dla nas wszystkich 🙂'
    },
  ]

  const [ActiveReview, setActiveReview] = useState(0)
  const numberOfReviews = REVIEWS.length

  const setPreviousReview = () => ActiveReview == 0 ? setActiveReview(numberOfReviews - 1) : setActiveReview(ActiveReview-1)
  const setNextReview = () => ActiveReview == numberOfReviews - 1 ? setActiveReview(0) : setActiveReview(ActiveReview+1)

  return <>
    <div className="review">
      <div className="review__presentation">
        <StaticImage
            src='..\images\gosia.jpg'
            alt={`Reviewer photo - ${REVIEWS[ActiveReview].name}`}
            className='photo'/>
        <h3 className="reviewers-name">~{REVIEWS[ActiveReview].name}</h3>
      </div>      
      <div className='review__content'>
        <ImQuotesLeft className='review__quote review__quote--start'/>
        <p>{REVIEWS[ActiveReview].text}</p>
        <ImQuotesRight className='review__quote review__quote--end'/>
      </div>
    </div>
    <div className='controls'>
        <PiSkipBackBold className='controls__icon' onClick={()=>setPreviousReview()}/>
        <IoPawSharp className='controls__icon'/>
        <PiSkipForwardBold className='controls__icon' onClick={()=>setNextReview()}/>
    </div>
  </>;
}

export default Reviews