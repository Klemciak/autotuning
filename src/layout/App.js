import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Navigation from "./Navigation"
import Page from "./Page"
import Footer from "./Footer"
import "../styles/App.scss"
import { ShoppingCartProvider } from "../components/Shop/ShoppingCartContext.tsx"
const App = () => {
  return (
    <ShoppingCartProvider>
      <div className="fullWrap">
        <Router>
          <header>{<Navigation />}</header>
          <main>{<Page />}</main>
          <footer>{<Footer />}</footer>
        </Router>
      </div>
    </ShoppingCartProvider>
  )
}

export default App
