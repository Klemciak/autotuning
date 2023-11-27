import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Navigation from "./Navigation"
import Page from "./Page"
import Footer from "./Footer"
import "../styles/App.scss"
const App = () => {
  return (
    <div className="fullWrap">
      <Router>
        <header>{<Navigation />}</header>
        <main>{<Page />}</main>
        <footer>{<Footer />}</footer>
      </Router>
    </div>
  )
}

export default App
