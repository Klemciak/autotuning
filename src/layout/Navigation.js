import React, { useEffect, useState, useRef } from "react"
import { NavLink, Link } from "react-router-dom"
import list from "../components/NavigationList.js"
import logo from "../graphics/logo.png"
import Breadcrumbs from "../components/Breadcrumbs"
import Dropdown from "../components/Dropdown.js"
import "../styles/Navigation.scss"

const Navigation = () => {
  const [showProjectDropdown, setShowProjectDropdown] = useState(false)
  const dropdownRef = useRef()

  const toggleDropdown = () => {
    setShowProjectDropdown((prevShowProjectDropdown) => !prevShowProjectDropdown)
  }

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowProjectDropdown(false)
      }
    }

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }, [])

  const menu = list.map((item) => (
    <li
      key={item.name}
      className={`nav_list_element ${item.animation} ${item.path === "/project" ? "project" : ""}`}
      id={`${item.id}`}
    >
      <NavLink to={item.path} className="nav_list_element_text">
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
          <li ref={dropdownRef}>
            <span
              className={`material-symbols-outlined nav_list_arrow ${
                showProjectDropdown ? "show_arrow" : "hide_arrow"
              }`}
              onClick={toggleDropdown}
            >
              double_arrow
            </span>
            <div className={`nav_list_dropdown ${showProjectDropdown ? "show" : "hide"}`}>
              <Dropdown />
            </div>
          </li>
        </ul>
      </nav>
      <Breadcrumbs />
    </>
  )
}

export default Navigation
