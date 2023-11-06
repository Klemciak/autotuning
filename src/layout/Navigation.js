import React from "react"
import { NavLink } from "react-router-dom"

const list = [
  { name: "start", path: "/", exact: true },
  { name: "o nas", path: "/about" },
  { name: "projekty", path: "/project" },
  { name: "sklep", path: "/shop" },
  { name: "kontakt", path: "/contact" },
]

const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path}>{item.name}</NavLink>
    </li>
  ))
  return (
    <nav className="main">
      <ul>{menu}</ul>
    </nav>
  )
}

export default Navigation
