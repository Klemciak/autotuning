import React from "react"
import { useEffect, useState } from "react"

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <>
      {backToTopButton && (
        <div
          style={{
            position: "fixed",
            bottom: "50px",
            right: "14px",
            color: "#E08A09",
            transform: "rotate(-90deg)",
            border: "3px solid #E08A09",
            cursor: "pointer",
            textAlign: "center",
            backgroundColor: "#36353590",
            zIndex: "50",
          }}
          onClick={scrollUp}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "40px", paddingTop: "3px" }}>
            double_arrow
          </span>
        </div>
      )}
    </>
  )
}

export default BackToTopButton
