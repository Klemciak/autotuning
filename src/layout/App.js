import React from "react"
import "../styles/App.css"
import { BrowserRouter as Router } from "react-router-dom"
import Header from "./Header"
import Navigation from "./Navigation"
const App = () => {
  return (
    <Router>
      <nav>{<Navigation />}</nav>
      <header>{<Header />}</header>
    </Router>
  )
}

export default App
