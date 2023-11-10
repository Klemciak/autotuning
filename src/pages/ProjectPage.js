import React from "react"
import { Route, Routes } from "react-router-dom"
import ProjectCarMain from "../pages/cars/ProjectCarMain"
import ProjectCar1 from "../pages/cars/ProjectCar1"
import ProjectCar2 from "../pages/cars/ProjectCar2"
import ProjectCar3 from "../pages/cars/ProjectCar3"
import ProjectCar4 from "../pages/cars/ProjectCar4"
import ProjectCar5 from "../pages/cars/ProjectCar5"
import ProjectCar6 from "../pages/cars/ProjectCar6"
import ErrorPage from "../pages/ErrorPage"

const ProjectPage = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectCarMain />} />
      <Route path="/car1" element={<ProjectCar1 />} />
      <Route path="/car2" element={<ProjectCar2 />} />
      <Route path="/car3" element={<ProjectCar3 />} />
      <Route path="/car4" element={<ProjectCar4 />} />
      <Route path="/car5" element={<ProjectCar5 />} />
      <Route path="/car6" element={<ProjectCar6 />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  )
}

export default ProjectPage
