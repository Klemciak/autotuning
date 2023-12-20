import React, { useState } from "react"

import "../styles/ContactPage.scss"
import BackToTopButton from "../components/BackToTopButton"
const ContactPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const formatPhoneNumber = (input) => {
    let formattedNumber = input.replace(/\D/g, "")
    if (formattedNumber.length > 3) {
      formattedNumber = formattedNumber.replace(/(\d{3})(\d{3})(\d{0})/, "$1-$2-$3")
    }
    setPhoneNumber(formattedNumber)
  }
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    text: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    email: "",
    text: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const validateForm = () => {
    const newErrors = {}

    if (values.name === "") {
      newErrors.name = "Podaj swoje imię"
    } else {
      newErrors.name = ""
    }

    if (values.surname === "") {
      newErrors.surname = "Podaj swoje nazwisko"
    } else {
      newErrors.surname = ""
    }
    if (values.email === "") {
      newErrors.email = "Podaj swój e-mail"
    } else {
      newErrors.email = ""
    }
    if (values.text === "") {
      newErrors.text = "Uzupełnij to pole"
    } else {
      newErrors.text = ""
    }
    setErrors(newErrors)
    if (values.name !== "" && values.surname !== "" && values.email !== "" && values.text !== "") {
      setValues({
        name: "",
        surname: "",
        email: "",
        text: "",
      })
      setPhoneNumber("")
      document.getElementById("form_box_name").value = ""
      document.getElementById("form_box_surname").value = ""
      document.getElementById("form_box_email").value = ""
      document.getElementById("form_telephone").value = ""
      document.getElementById("form_title").value = ""
      document.getElementById("form_text").value = ""
      setFormSubmitted(true)
    } else {
      setFormSubmitted(false)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    validateForm()
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
          <h2 className="contact_info_adress">Kraków, ul. Ciekawa, 34-300</h2>
          <p className="contact_info_telephone">
            Telefon:{" "}
            <a href="tel:+48123456789" className="contact_info_telephone_number">
              123-456-789
            </a>
          </p>
          <p className="contact_info_email">
            E-mail:{" "}
            <a href="mailto:random@interia.pl" className="contact_info_email_text">
              random@interia.pl
            </a>
          </p>
        </div>

        <div className="form_wrap">
          <form className="form" id="form" onSubmit={handleSubmit}>
            <div className="form_box">
              <input
                type="text"
                placeholder="*Imię"
                className={`form_box_name ${errors.name ? "error" : ""}`}
                id="form_box_name"
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
              <span className="name_error">{errors.name}</span>
            </div>
            <div className="form_box">
              <input
                type="text"
                placeholder="*Nazwisko"
                className={`form_box_surname ${errors.surname ? "error" : ""}`}
                id="form_box_surname"
                onChange={(e) => setValues({ ...values, surname: e.target.value })}
              />
              <span className="surname_error">{errors.surname}</span>
            </div>
            <div className="form_box">
              <input
                type="email"
                placeholder="*E-mail"
                className={`form_box_email ${errors.email ? "error" : ""}`}
                id="form_box_email"
                onChange={(e) => setValues({ ...values, email: e.target.value })}
              />
              <span className="email_error">{errors.email} </span>
            </div>
            <div className="form_box">
              <input
                type="tel"
                placeholder="Telefon"
                className="form_telephone"
                id="form_telephone"
                maxLength="15"
                value={phoneNumber}
                onChange={(e) => formatPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form_box">
              <input type="text" placeholder="Tytuł" className="form_title" id="form_title" />
            </div>
            <div className="form_box">
              <textarea
                type="textarea"
                placeholder="*Twoja wiadomość"
                className={`form_text ${errors.text ? "error" : ""}`}
                id="form_text"
                onChange={(e) => setValues({ ...values, text: e.target.value })}
              />
              <span className="textarea_error">{errors.text}</span>
            </div>

            <input type="submit" value="Wyślij" className="form_btn" id="form_btn" />
          </form>
          <div className={`form_send ${formSubmitted ? "show" : ""}`}>
            <span className="form_send_text">Wiadomość wysłana</span>
            <button className="form_send_back" onClick={() => setFormSubmitted(false)}>
              Powrót
            </button>
          </div>
        </div>
      </div>
      <BackToTopButton />
    </div>
  )
}

export default ContactPage
