import React from "react"
import lamboImg1 from "../../graphics/lamborghini-aventador/lamborghini-aventador-img1.jpg"
import lamboImg2 from "../../graphics/lamborghini-aventador/lamborghini-aventador-img2.jpg"
import lamboImg3 from "../../graphics/lamborghini-aventador/lamborghini-aventador-img3.jpg"
import lamboImg4 from "../../graphics/lamborghini-aventador/lamborghini-aventador-img4.jpg"
import lamboImg5 from "../../graphics/lamborghini-aventador/lamborghini-aventador-img5.jpg"
import lamboImg6 from "../../graphics/lamborghini-aventador/lamborghini-aventador-img6.jpg"
import lamboImg7 from "../../graphics/lamborghini-aventador/lamborghini-aventador-img7.jpg"
import lamboImg8 from "../../graphics/lamborghini-aventador/lamborghini-aventador-img8.jpg"
import lamboImg9 from "../../graphics/lamborghini-aventador/lamborghini-aventador-img9.jpg"
import lamboImg10 from "../../graphics/lamborghini-aventador/lamborghini-aventador-img10.jpg"
import lamboImg11 from "../../graphics/lamborghini-aventador/lamborghini-aventador-img11.jpg"
import WSPGallery from "../../components/WSPGallery"

const ProjectCar3 = () => {
  const galleryImages = [
    {
      img: lamboImg1,
    },
    {
      img: lamboImg2,
    },
    {
      img: lamboImg3,
    },
    {
      img: lamboImg4,
    },
    {
      img: lamboImg5,
    },
    {
      img: lamboImg6,
    },
    {
      img: lamboImg7,
    },
    {
      img: lamboImg8,
    },
    {
      img: lamboImg9,
    },
    {
      img: lamboImg10,
    },
    {
      img: lamboImg11,
    },
  ]
  return (
    <div>
      <WSPGallery galleryImages={galleryImages} />
    </div>
  )
}

export default ProjectCar3
