import React from "react"
import { NavLink, Link } from "react-router-dom"
import list from "../components/NavigationList.js"
import logo from "../graphics/logo.png"
import Breadcrumbs from "../components/Breadcrumbs"
import "../styles/Navigation.scss"

const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.name} className={`nav_list_element ${item.animation} `} id={`${item.id}`}>
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
        <ul className="nav_list">{menu}</ul>
      </nav>
      <Breadcrumbs />
    </>
  )
}

export default Navigation
