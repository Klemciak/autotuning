import React, { useState } from "react"
import "../styles/carsStyles/wspGallery.scss"
const WSPGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const prevSlide = () => {
    slideNumber === 0 ? setSlideNumber(galleryImages.length - 1) : setSlideNumber(slideNumber - 1)
  }
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
  }
  return (
    <>
      {openModal && (
        <div className="sliderWrap">
          <span className="material-symbols-outlined btnClose" onClick={handleCloseModal}>
            cancel
          </span>
          <span className="material-symbols-outlined btnPrev" onClick={prevSlide}>
            arrow_circle_left
          </span>
          <span className="material-symbols-outlined btnNext" onClick={nextSlide}>
            arrow_circle_right
          </span>
          <div className="fullScreenImage">
            <img src={galleryImages[slideNumber].img} alt="" />
          </div>
        </div>
      )}
      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div className="single" key={index} onClick={() => handleOpenModal(index)}>
                <img src={slide.img} alt="" />
              </div>
            )
          })}
      </div>
    </>
  )
}

export default WSPGallery
