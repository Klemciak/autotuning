import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Navigation from "./Navigation"
import Page from "./Page"
import "../styles/App.scss"
const App = () => {
  return (
    <Router>
      <header>{<Navigation />}</header>
      <main>{<Page />}</main>
    </Router>
  )
}

export default App
