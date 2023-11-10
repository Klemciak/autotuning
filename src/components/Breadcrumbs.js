import React from "react"
import { useLocation, Link } from "react-router-dom"
import list from "../components/NavigationList.js"
import carList from "../components/ProjectCarList.js"

const Breadcrumbs = () => {
  const location = useLocation()

  const pathSegments = location.pathname.split("/")
  let currentLink = []

  pathSegments.forEach((crumb) => {
    currentLink.push(`/${crumb}`)
  })

  const matchingListEntries = list.filter((item) => currentLink.includes(item.path))
  const matchingCarListEntries = carList.filter((item) => currentLink.includes(item.path))

  const allMatchingEntries = matchingListEntries.concat(matchingCarListEntries)
  console.log(allMatchingEntries)

  return (
    <div className="breadcrumbs">
      {allMatchingEntries.map((element, index, array) => (
        <React.Fragment key={element.id}>
          {index === array.length - 1 ? (
            <span className="breadcrumbs_element_last">{element.name}</span>
          ) : (
            <Link
              to={element.path === "/project" ? "/project" : element.path}
              key={element.id}
              className="breadcrumbs_element"
            >
              {element.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Breadcrumbs
