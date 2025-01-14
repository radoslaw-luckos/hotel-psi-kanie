import React, {useCallback, useEffect, useState} from 'react'
import { IoPawSharp } from 'react-icons/io5'
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { httpReqState, site_key } from '../utils/Vars';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const schema = yup.object({
  dog_name: yup.string().required(),
  dog_breed: yup.string().required(),
  dog_category: yup.string().required(),
  owner_name: yup.string().required(),
  owner_surname: yup.string().required(),
  owner_email: yup.string().email().required(),
  owner_phone: yup.number().required().positive().integer(),
  stay_start: yup.date().default(() => new Date()),
  stay_end: yup.date().default(() => new Date()),
  stay_message: yup.string(),
}).required();

type FormData = yup.InferType<typeof schema>;

const ContactForm = () => {

  const { register,reset, handleSubmit,formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const [httpReqInAction, setHttpReqInAction] = useState(httpReqState.Unsend)

  const {executeRecaptcha} = useGoogleReCaptcha();
  const [reCaptchaToken, setReCapthcaToken] = useState('')

  const handleReCaptchaVerify = useCallback(async ($event:any) => {

    $event.preventDefault();

    if (!executeRecaptcha) {
      console.log('Execute ReCaptcha not available yet');
      return;
    }

    const token = await executeRecaptcha('signup');
    setReCapthcaToken(token)
    console.log('token is',token);
    
    handleSubmit((formData) => onSubmit(formData,token))($event);

  },[executeRecaptcha]);


  const onSubmit = async (formData:FormData, token:string) => {

    setHttpReqInAction(httpReqState.Sending)
    
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({...formData, reCaptchaToken: token}),
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
    };
    try {
      const response = await fetch("http://localhost:5000/email", requestOptions);
      if (response.ok) {
        reset();    
        setHttpReqInAction(httpReqState.Done)   
      }
    } catch (error) {
      console.log(error);  
      setHttpReqInAction(httpReqState.Done)    
    }
  };

  return (
    <form className='contact-form__form form' action="post" onSubmit={handleReCaptchaVerify} noValidate>
            <h2 className="subtitle">Skontaktuj się z nami!</h2>
            <fieldset className="form__group">
              <legend className="form__group-title">Dane zwierzaka</legend>
              <label className="form__label" htmlFor="dog_name">Imię psa</label>
              <input className="form__input" type="text" id='dog_name' placeholder='Wpisz imię Twojego psa...' {...register("dog_name")}/>
              {errors.dog_name && <p className='error'>Pole wypełnione niepoprawnie! Prosimy o wpisanie imienia psa!</p>}
              <label className="form__label" htmlFor="dog_breed">Rasa psa</label>
              <input className="form__input" type="text" id='dog_breed'placeholder='Wpisz rasę Twojego psa...' {...register("dog_breed")}/>
              {errors.dog_breed && <p className='error'>Pole wypełnione niepoprawnie! Prosimy o podanie rasy psa!</p>}
              <label className="form__label" htmlFor="dog_category">Wielkość psa</label>
              <select className="form__input select" id="dog_category" {...register("dog_category")}>
                <option className='select__option' value="mały">Mały pies(do 10 kg)</option>
                <option className='select__option' value="średni">Średni pies (10-25 kg)</option>
                <option className='select__option' value="duży">Duży pies (25-45 kg)</option>
                <option className='select__option' value="b.duży">B. duży pies  (powyżej 45 kg)</option>
              </select>
              {errors.dog_category && <p className='error'>Pole wypełnione niepoprawnie! Prosimy o wybór kategorii wagowej psa!</p>}
            </fieldset>
            <fieldset className="form__group">
              <legend className="form__group-title">Dane właściciela</legend>
              <label className="form__label" htmlFor="owner_name">Imię</label>
              <input className="form__input" type="text" id='owner_name' placeholder='Wpisz swoje imię...' {...register("owner_name")}/>
              {errors.owner_name && <p className='error'>Pole wypełnione niepoprawnie! Prosimy o podanie imienia!</p>}
              <label className="form__label" htmlFor="owner_surname">Nazwisko</label>
              <input className="form__input" type="text" id='owner_surname' placeholder='Wpisz swoje nazwisko...' {...register("owner_surname")}/>
              {errors.owner_surname && <p className='error'>Pole wypełnione niepoprawnie! Prosimy o podanie nazwiska!</p>}
              <label className="form__label" htmlFor="owner_email">Adres e-mail</label>
              <input className="form__input" type="email" id='owner_email' placeholder='Podaj swój adres email...' {...register("owner_email")}/>
              {errors.owner_email && <p className='error'>Pole wypełnione niepoprawnie! Prosimy o wpisanie poprawnego adresu email!</p>}
              <label className="form__label" htmlFor="owner_phone">Numer telefonu</label>
              <input className="form__input" type="tel" id='owner_phone' placeholder='Podaj swój numer telefonu...' {...register("owner_phone")}/>
              {errors.owner_phone && <p className='error'>Pole wypełnione niepoprawnie! Prosimy o podanie właściwego numeru telefonu!</p>}
            </fieldset>
            <fieldset className="form__group">
            <legend className="form__group-title">Szczegóły pobytu</legend>
              <label className="form__label" htmlFor="stay_start">Od kiedy?</label>
              <input className="form__input" type="date" id='stay_start' {...register("stay_start")}/>
              {errors.stay_start && <p className='error'>Pole wypełnione niepoprawnie! Prosimy o prawidłowej daty!</p>}
              <label className="form__label" htmlFor="stay_end">Do kiedy?</label>
              <input className="form__input" type="date" id='stay_end' {...register("stay_end")}/>
              {errors.stay_end && <p className='error'>Pole wypełnione niepoprawnie! Prosimy o prawidłowej daty!</p>}
              <label className="form__label" htmlFor="stay_message">Wiadomość(opcjonalnie)</label>
              <textarea className='form__input textarea' id="stay_message" rows={4} placeholder='Tu umieść treść swojej wiadomości...' {...register("stay_message")}></textarea>
              {errors.stay_message && <p className='error'>Pole wypełnione niepoprawnie! Prosimy o poprawienie wiadomości!</p>}
            </fieldset>
            {httpReqInAction == httpReqState.Sending && <p className='message message--neutral'>Twoja wiadomość jest przetwarzana!</p>}
            {httpReqInAction == httpReqState.Done && <p className='message message--success'>Twoja wiadomość została wysłana!</p>}
            <button className='button button--bordered button--right form__submit-btn' type="submit"><IoPawSharp className='icon'/>Wyślij wiadomość</button>
          </form>
  )
}

export default ContactForm