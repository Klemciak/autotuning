import React from "react"
import { useLocation, Link } from "react-router-dom"
import list from "../components/NavigationList.js"
import carList from "../components/ProjectCarList.js"

export default function Breadcrumbs() {
  const location = useLocation()
  let currentLink = ""

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`
      const listEntry = list.find((item) => item.path === currentLink)
      const listCarEntry = carList.find((item) => item.path === currentLink)
      const crumbName = listCarEntry ? listCarEntry.name : listEntry ? listEntry.name : crumb

      return (
        <div className="crumb" key={crumb}>
          <Link to="/" className="crumb_text">
            Start
          </Link>
          <Link to={currentLink} className="crumb_text">
            {crumbName}
          </Link>
        </div>
      )
    })

  return <div className="breadcrumbs">{crumbs}</div>
}
