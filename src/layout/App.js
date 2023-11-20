import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Navigation from "./Navigation"
import Page from "./Page"
import "../styles/App.scss"
const App = () => {
  return (
    <div className="fullWrap">
      <Router>
        <header>{<Navigation />}</header>
        <main>{<Page />}</main>
      </Router>
    </div>
  )
}

export default App
