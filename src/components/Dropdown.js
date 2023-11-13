import React from "react"
import { NavLink } from "react-router-dom"
import "../styles/Dropdown.scss"

const Dropdown = () => {
  return (
    <>
      <NavLink to="/project/car1" className="nav_list_dropdown_element">
        bmw e30
      </NavLink>
      <NavLink to="/project/car2" className="nav_list_dropdown_element">
        fiat 500
      </NavLink>
      <NavLink to="/project/car3" className="nav_list_dropdown_element">
        lamborghini
      </NavLink>
      <NavLink to="/project/car4" className="nav_list_dropdown_element">
        bmw f80
      </NavLink>
      <NavLink to="/project/car5" className="nav_list_dropdown_element">
        rolls royce ghost I
      </NavLink>
      <NavLink to="/project/car6" className="nav_list_dropdown_element">
        ford shelby gt350s
      </NavLink>
    </>
  )
}

export default Dropdown
