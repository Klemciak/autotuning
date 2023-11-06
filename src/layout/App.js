import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Header from "./Header"
import Navigation from "./Navigation"
import "../styles/App.scss"
const App = () => {
  return (
    <Router>
      <nav>{<Navigation />}</nav>
      <header>{<Header />}</header>
    </Router>
  )
}

export default App
