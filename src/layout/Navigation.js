import React, { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import list from "../components/NavigationList.js"
import logo from "../graphics/logo.png"
import Breadcrumbs from "../components/Breadcrumbs"
import Dropdown from "../components/Dropdown.js"
import "../styles/Navigation.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

const Navigation = () => {
  const [showProjectDropdown, setShowProjectDropdown] = useState(false)
  const [showHamburgerNav, setShowHamburgerNav] = useState(false)

  const handleMouseEnter = () => {
    setShowProjectDropdown(true)
  }

  const handleMouseLeave = () => {
    setShowProjectDropdown(false)
  }
  const menu = list.map((item) => (
    <li
      key={item.name}
      className={`nav_list_element ${item.animation} ${item.path === "/project" ? "project" : ""}`}
      id={`${item.id}`}
      onMouseEnter={item.id === "3" ? handleMouseEnter : undefined}
      onMouseLeave={item.id === "3" ? handleMouseLeave : undefined}
    >
      <NavLink to={item.path} className="nav_list_element_text" onClick={() => setShowHamburgerNav(false)}>
        {item.name}
      </NavLink>
    </li>
  ))

  return (
    <>
      <nav className="nav">
        <Link to="/">
          <img src={logo} alt="Auto-Tuning logo" className="logo" />
        </Link>
        <ul className="nav_list">
          {menu}

          <div
            className={`nav_list_dropdown ${showProjectDropdown ? "show" : "hide"}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="nav_list_dropdownLook">
              <Dropdown />
            </div>
          </div>
        </ul>
        {/* hamburger nav */}
        <div className="nav_hamburger">
          <span class="material-symbols-outlined nav_hamburger_icon" onClick={() => setShowHamburgerNav(true)}>
            menu_open
          </span>

          <div className={`nav_hamburger_menu ${showHamburgerNav ? "active" : ""}`}>
            <button className="nav_hamburger_menu_close" onClick={() => setShowHamburgerNav(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            {menu}
          </div>
        </div>
      </nav>
      <Breadcrumbs />
    </>
  )
}

export default Navigation
