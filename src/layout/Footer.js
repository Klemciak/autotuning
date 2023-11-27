import React from "react"
import "../styles/Footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3Alt, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
  return (
    <div className="footerWrap">
      <h3 className="footerWrap_title">Do stworzenia strony użyto:</h3>
      <div className="footerWrap_box">
        <FontAwesomeIcon icon={faHtml5} className="footerWrap_box_icon" />
        <FontAwesomeIcon icon={faCss3Alt} className="footerWrap_box_icon" />
        <FontAwesomeIcon icon={faJs} className="footerWrap_box_icon" />
        <FontAwesomeIcon icon={faReact} className="footerWrap_box_icon" />
        <FontAwesomeIcon icon={faSass} className="footerWrap_box_icon" />
      </div>
    </div>
  )
}

export default Footer
