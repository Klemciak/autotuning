import React, { useState } from "react"
import validator from "validator"
import "../styles/ContactPage.scss"
const ContactPage = () => {
  const [nameInputValue, setNameInputValue] = useState("")
  const [nameInputError, setNameInputError] = useState(false)

  const [surnameInputValue, setSurnameInputValue] = useState("")
  const [surnameInputError, setSurnameInputError] = useState(false)

  const [emailInputValue, setEmailInputValue] = useState("")
  const [emailInputError, setEmailInputError] = useState(false)

  const [textAreaValue, setTextAreaValue] = useState("")
  const [textAreaError, setTextAreaError] = useState("")

  const checkValue = (e, setState, setErrorState) => {
    const value = e.target.value
    setState(value)
    if (value.trim() !== "") {
      setErrorState(false)
    }
  }

  const checkForm = (e) => {
    e.preventDefault()
    if (nameInputValue.trim() === "") {
      setNameInputError(true)
    } else {
      setNameInputError(false)
    }

    if (surnameInputValue.trim() === "") {
      setSurnameInputError(true)
    } else {
      setSurnameInputError(false)
    }

    if (emailInputValue.trim() === "") {
      setEmailInputError(true)
    } else {
      setEmailInputError(false)
    }
    if (!validator.isEmail(emailInputValue)) {
      setEmailInputError(true)
    } else {
      setEmailInputError(false)
    }

    if (textAreaValue.trim() === "") {
      setTextAreaError(true)
      setEmailInputValue("")
    } else {
      setTextAreaError(false)
    }
    if (
      nameInputValue.trim() !== "" &&
      surnameInputValue.trim() !== "" &&
      emailInputValue.trim() !== "" &&
      textAreaValue.trim() !== ""
    ) {
      alert("By się wysłało :)")
    }
  }

  return (
    <div className="contact">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7294.488411002833!2d20.323385302712964!3d49.729792682248224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47161b190eea7aa1%3A0xc0e2b27138e3267e!2sTymbark!5e0!3m2!1spl!2spl!4v1699467654304!5m2!1spl!2spl"
        width="1100"
        height="600"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
        className="map"
      ></iframe>

      <div className="infoAndForm_wrap">
        <div className="contact_info">
          <h1 className="contact_info_title">Skontaktuj się z nami</h1>
          <h2 className="contact_info_adress">Tymbark, ul. Polna 448, 34-650</h2>
          <p className="contact_info_telephone">
            Telefon:{" "}
            <a href="tel:+48123456789" className="contact_info_telephone_number">
              797-451-007
            </a>
          </p>
          <p className="contact_info_email">
            E-mail:{" "}
            <a href="mailto:klemcio@interia.pl" className="contact_info_email_text">
              klemcio@interia.pl
            </a>
          </p>
        </div>

        <div className="form_wrap">
          <form className="form" id="form" onSubmit={checkForm} noValidate>
            <input
              type="text"
              placeholder={nameInputError ? "*Imię - To pole jest wymagane" : "*Imię"}
              required
              className={`form_name ${nameInputError ? "error" : ""}`}
              id="form_name"
              value={nameInputValue}
              onChange={(e) => checkValue(e, setNameInputValue, setNameInputError)}
            />
            <input
              type="text"
              placeholder={surnameInputError ? "*Nazwisko - To pole jest wymagane" : "*Nazwisko"}
              required
              className={`form_surname ${surnameInputError ? "error" : ""}`}
              id="form_surname"
              value={surnameInputValue}
              onChange={(e) => checkValue(e, setSurnameInputValue, setSurnameInputError)}
            />
            <input
              type="email"
              placeholder={emailInputError ? "*E-mail - To pole jest wymagane" : "*E-mail"}
              required
              className={`form_name_email ${emailInputError ? "error" : ""}`}
              id="form_name_email"
              value={emailInputValue}
              onChange={(e) => checkValue(e, setEmailInputValue, setEmailInputError)}
            />
            <input type="tel" placeholder="Telefon" className="form_name_telephone" id="form_name_telephone" />
            <input type="text" placeholder="Tytuł" className="form_name_title" id="form_name_title" />
            <textarea
              type="textarea"
              placeholder={textAreaError ? "*Twoja wiadomość - To pole jest wymagane" : "*Twoja wiadomość"}
              className={`form_name_text ${textAreaError ? "error" : ""}`}
              id="form_name_text"
              required
              value={textAreaValue}
              onChange={(e) => checkValue(e, setTextAreaValue, setTextAreaError)}
            />
            <input type="submit" value="Wyślij" className="form_name_btn" id="form_name_btn" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
