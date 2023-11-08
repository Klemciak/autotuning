import React from "react"
import "../styles/ContactPage.scss"
const ContactPage = () => {
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
          <form className="form" id="form" noValidate>
            <input type="text" placeholder="*Imię" required className="form_name" id="form_name" />
            <input type="text" placeholder="*Nazwisko" required className="form_surname" id="form_surname" />
            <input type="email" placeholder="*E-mail" required className="form_name_email" id="form_name_email" />
            <input type="tel" placeholder="Telefon" className="form_name_telephone" id="form_name_telephone" />
            <input type="text" placeholder="Tytuł" className="form_name_title" id="form_name_title" />
            <textarea
              type="textarea"
              placeholder="*Twoja wiadomość"
              className="form_name_text"
              id="form_name_text"
              required
            />
            <input type="submit" value="Wyślij" className="form_name_btn" id="form_name_btn" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
