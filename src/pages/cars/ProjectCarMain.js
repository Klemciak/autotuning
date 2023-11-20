import { Link } from "react-router-dom"
import React from "react"
import "../../styles/ProjectCarMain.scss"
import BackToTopButton from "../../components/BackToTopButton"
const ProjectCarMain = () => {
  return (
    <div className="ProjectCarMainWrap">
      <div className="ProjectCarMainWrap_box">
        <div className="ProjectCarMainWrap_box_inside">
          <h2 className="box_inside_carName">bmw e30</h2>
          <p className="box_inside_carText">
            Odkryj nieograniczone możliwości stylu na naszej stronie. Tutaj elegancja - to filozofia.
          </p>
          <Link to="/project/car1">
            <button className="box_inside_button">Zobacz sam</button>
          </Link>
        </div>
      </div>
      <div className="ProjectCarMainWrap_box">
        <div className="ProjectCarMainWrap_box_inside">
          <h2 className="box_inside_carName">fiat 500</h2>
          <p className="box_inside_carText">
            Tutaj design spotyka funkcjonalność, tworząc unikalne połączenie wygody i elegancji.
          </p>
          <Link to="/project/car2">
            <button className="box_inside_button">Zobacz sam</button>
          </Link>
        </div>
      </div>
      <div className="ProjectCarMainWrap_box">
        <div className="ProjectCarMainWrap_box_inside">
          <h2 className="box_inside_carName">lamborghini</h2>
          <p className="box_inside_carText">Zapraszamy do świata mocy silnika i precyzji.</p>
          <Link to="/project/car3">
            <button className="box_inside_button">Zobacz sam</button>
          </Link>
        </div>
      </div>
      <div className="ProjectCarMainWrap_box">
        <div className="ProjectCarMainWrap_box_inside">
          <h2 className="box_inside_carName">bmw f80</h2>
          <p className="box_inside_carText">
            Odkryj pełną moc i elegancję w tym pojeździe — gdzie pasja spotyka doskonałość.
          </p>
          <Link to="/project/car4">
            <button className="box_inside_button">Zobacz sam</button>
          </Link>
        </div>
      </div>
      <div className="ProjectCarMainWrap_box">
        <div className="ProjectCarMainWrap_box_inside">
          <h2 className="box_inside_carName">Shelby</h2>
          <p className="box_inside_carText">
            Nasze pojazdy to symfonia inżynierii i siły, której doświadczysz za kierownicą.
          </p>
          <Link to="/project/car6">
            <button className="box_inside_button">Zobacz sam</button>
          </Link>
        </div>
      </div>
      <div className="ProjectCarMainWrap_box">
        <div className="ProjectCarMainWrap_box_inside">
          <h2 className="box_inside_carName">rolls royce</h2>
          <p className="box_inside_carText">Rozkoszuj się każdą podróżą na nowym poziomie komfortu.</p>
          <Link to="/project/car5">
            <button className="box_inside_button">Zobacz sam</button>
          </Link>
        </div>
      </div>
      <BackToTopButton />
    </div>
  )
}

export default ProjectCarMain
