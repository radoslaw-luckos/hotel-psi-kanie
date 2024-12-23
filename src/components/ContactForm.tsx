import React from 'react'
import { IoPawSharp } from 'react-icons/io5'

type Props = {}

const ContactForm = (props: Props) => {
  return (
    <form className='contact-form__form form' action="get">
            <h2 className="subtitle">Skontaktuj się z nami!</h2>
            <fieldset className="form__group">
              <legend className="form__group-title">Dane zwierzaka</legend>
              <label className="form__label" htmlFor="dog-name">Imię psa</label>
              <input className="form__input" type="text" id='dog-name' placeholder='Wpisz imię Twojego psa...'/>
              <label className="form__label" htmlFor="dog-breed">Rasa psa</label>
              <input className="form__input" type="text" id='dog-breed'/>
              <label className="form__label" htmlFor="dog-category">Wielkość psa</label>
              <select className="form__input select" name="Wielkość psa" id="dog-category">
                <option className='select__option' value="">Mały pies(do 10 kg)</option>
                <option className='select__option' value="">Średni pies (10-25 kg)</option>
                <option className='select__option' value="">Duży pies (25-45 kg)</option>
                <option className='select__option' value="">B. duży pies  (powyżej 45 kg)</option>
              </select>
            </fieldset>
            <fieldset className="form__group">
              <legend className="form__group-title">Dane właściciela</legend>
              <label className="form__label" htmlFor="owner-name">Imię</label>
              <input className="form__input" type="text" id='owner-name'/>
              <label className="form__label" htmlFor="owner-surname">Nazwisko</label>
              <input className="form__input" type="text" id='owner-surname'/>
              <label className="form__label" htmlFor="owner-email">Adres e-mail</label>
              <input className="form__input" type="email" id='owner-email'/>
              <label className="form__label" htmlFor="owner-phone">Numer telefonu</label>
              <input className="form__input" type="tel" id='owner-phone'/>
            </fieldset>
            <fieldset className="form__group">
            <legend className="form__group-title">Szczegóły pobytu</legend>
              <label className="form__label" htmlFor="stay-start">Od kiedy?</label>
              <input className="form__input" type="date" id='stay-start'/>
              <label className="form__label" htmlFor="stay-end">Do kiedy?</label>
              <input className="form__input" type="date" id='stay-end'/>
              <label className="form__label" htmlFor="stay-message">Wiadomość(opcjonalnie)</label>
              <textarea className='form__input textarea' name="Wiadomość" id="stay-message" rows={4}></textarea>
            </fieldset>
            <button className='button button--bordered button--right form__submit-btn' type="submit"><IoPawSharp className='icon'/>Wyślij wiadomość</button>
          </form>
  )
}

export default ContactForm