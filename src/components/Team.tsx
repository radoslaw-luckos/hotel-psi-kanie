import React from 'react'
import { PiSkipBackBold, PiSkipForwardBold } from "react-icons/pi"
import { IoPawSharp } from "react-icons/io5"
import { useState } from "react"
import { TEAM } from '../utils/TeamList'
import { StaticImage } from "gatsby-plugin-image"


type Props = {}

const Team = (props: Props) => {

    const [ActivePerson, setActivePerson] = useState(0)
    const numberOfPeople = TEAM.length
    
    const setPreviousPerson = () => ActivePerson == 0 ? setActivePerson(numberOfPeople - 1) : setActivePerson(ActivePerson-1)
    const setNextPerson = () => ActivePerson == numberOfPeople - 1 ? setActivePerson(0) : setActivePerson(ActivePerson+1)
  return (
    <section className="team">
          <h2 className="section-title section-title--dark">Nasza kadra</h2>
          <div className="team-card">
            {TEAM[ActivePerson].photo}
            <h3 className="section-title section-title--dark team-card__name">{TEAM[ActivePerson].name}</h3>
            {TEAM[ActivePerson].text}
          </div>
          <div className='controls'>
                  <PiSkipBackBold className='controls__icon' onClick={()=>setPreviousPerson()}/>
                  <IoPawSharp className='controls__icon'/>
                  <PiSkipForwardBold className='controls__icon' onClick={()=>setNextPerson()}/>
              </div>
        </section>
  )
}

export default Team