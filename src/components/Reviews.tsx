import React, { useState } from 'react'
import { PiSkipForwardBold, PiSkipBackBold } from "react-icons/pi";
import { IoPawSharp } from 'react-icons/io5';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { REVIEWS } from '../utils/ReviewsList';

type Props = {
}

const Reviews = (props: Props) => {  

  const [ActiveReview, setActiveReview] = useState(0)
  const numberOfReviews = REVIEWS.length

  const setPreviousReview = () => ActiveReview == 0 ? setActiveReview(numberOfReviews - 1) : setActiveReview(ActiveReview-1)
  const setNextReview = () => ActiveReview == numberOfReviews - 1 ? setActiveReview(0) : setActiveReview(ActiveReview+1)

  return <>
    <div className="review">
      <div className="review__presentation">
      {REVIEWS[ActiveReview].photo}
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