import React from 'react'
import {StaticImage } from 'gatsby-plugin-image'

export const TEAM = [
    {
        photo: <StaticImage className='team-card__image' src='../images/sylwia.jpg' alt='Zdjęcie Sylwii Hawranek'/>,
        name: 'Sylwia Hawranek',
        text: <><p className="team-card__paragraph"><span className="important">Prawdziwa psia superbohaterka.<br/></span>Od 12 lat wolontariuszka w Schronisku Na Paluchu.</p>
        <p className="team-card__paragraph">Doświadczona w opiece nad obłożnie chorymi psami. Jej dom to pięciogwiazdkowy hotel dla psiaków z Fundacji Przyjaciele Palucha i Pogotowia dla Zwierząt. Wielokrotnie przeprowadzała interwencje z ramienia Towarzystwa Opieki nad Zwierzętami.</p>
        <p className="team-card__paragraph"><span className="important">Psia psychoterapeutka z nadludzką cierpliwością i empatią.<br/></span> Specjalistka od psów z agresją lękową.</p></>
    },
    {
        photo: <StaticImage className='team-card__image' src='../images/pawel.jpg' alt='Zdjęcie Pawła Hawranka'/>,
        name: 'Paweł Hawranek',
        text: <>
        <p  className="team-card__paragraph"><span className="important">Wieloletni wolontariusz w Schronisku na Paluchu. </span> Troskliwy opiekun. </p><p  className="team-card__paragraph"> W psim hotelu znany jako <span className="important">,,Ninja Naprawiacz’’</span>. Jeśli coś w hotelu nie działa, Paweł już ma plan. Od zabawek po ogrodzenie – wszystko naprawi w mig. Dzięki niemu nasi goście zawsze bawią się w bezpiecznym miejscu.</p></>
    },
    {
        photo: <StaticImage className='team-card__image' src='../images/bartek.jpg' alt='Zdjęcie Barłomieja Wińskiego'/>,
        name: 'Bartłomiej Wiński',
        text: <>
        <p  className="team-card__paragraph"> W psim hotelu znany jako <span className="important">,,Oświecony Piesio-Dyrektor’’. </span></p>
        <p  className="team-card__paragraph">Zawsze na posterunku. Kreatywny, pomysłowy, życzliwy. Od małego kocha psy i rozumie ich potrzeby. Otwarty na nowe pomysły, aby zapewnić czworonogom jak najlepsza opiekę.</p></>
    },
    {
        photo: <StaticImage className='team-card__image' src='..\images\michal.JPG' alt='Zdjęcie Michała Hawranka'/>,
        name: 'Michał Hawranek',
        text: <>
        <p  className="team-card__paragraph"><span className="important">,,Pieski Zuch’’.</span> Zawsze uśmiechnięty, potrafi nawiązać wyjątkową więź z każdym psem.</p>
        <p  className="team-card__paragraph">Specjalista w głaskaniu i przytulaniu naszych podopiecznych. Wylegiwanie się z psiakami na podłodze, to jego ulubione zajęcie.</p></>
    },
  ]