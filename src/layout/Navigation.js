import React from "react"
import { NavLink, Link, useLocation } from "react-router-dom"
import logo from "../graphics/logo.png"
import "../styles/Navigation.scss"

const list = [
  { animation: "up", name: "start", path: "/", exact: true },
  { animation: "down", name: "o nas", path: "/about" },
  { animation: "up", name: "projekty", path: "/project" },
  { animation: "down", name: "sklep", path: "/shop" },
  { animation: "up", name: "kontakt", path: "/contact" },
]

const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.name} className={`nav_list_element ${item.animation}`}>
      <NavLink to={item.path} className="nav_list_element_text">
        {item.name}
      </NavLink>
    </li>
  ))

  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="Auto-Tuning logo" className="logo" />
      </Link>
      <ul className="nav_list">{menu}</ul>
    </nav>
  )
}

export default Navigation
