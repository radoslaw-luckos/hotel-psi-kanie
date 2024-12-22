import React, { ReactNode } from 'react'
import { IoCheckmark, IoPawSharp } from "react-icons/io5";

type Props = {
    children?: any,
    text: ReactNode
}

const InfoBullet = ({children, text}: Props) => {
  return (
    <li className='info-bullet'>
        <div className="outer"><IoPawSharp className='icon'/>
        {text}</div>        
        <ul className='info-bullet__inner-list'>
            {children?.map((child: ReactNode) => (
                <li className="inner">
                    <IoCheckmark className='icon'/>{child}
                </li>
            ))}
        </ul>
    </li>
  )
}

export default InfoBullet