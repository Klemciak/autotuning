import React from "react"
import { Route, Routes } from "react-router-dom"
import StartPage from "../pages/StartPage"
import AboutPage from "../pages/AboutPage"
import ProjectPage from "../pages/ProjectPage"
import ShopPage from "../pages/ShopPage"
import ContactPage from "../pages/ContactPage"
import ErrorPage from "../pages/ErrorPage"

const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/project/*" element={<ProjectPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  )
}

export default Page
