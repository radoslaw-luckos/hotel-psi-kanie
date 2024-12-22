import React, { ReactNode } from 'react'

type Props = {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: string,
    text: string
}

const OfferCard = ({Icon, title, text}: Props) => {
  return (
    <li className='offer-card'>
        <Icon className='offer-card__icon'/>
        <h2 className="offer-card__title section-title">{title}</h2>
        <p className='offer-card__text'>{text}</p>
    </li>
  )
}

export default OfferCard