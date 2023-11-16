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
import "../../styles/carsStyles/ProjectCar3And5.scss"

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
    <div className="wrap">
      <div className="header">
        <div className="header_box">
          <div className="box_title">
            Lamborghini aventador <br />
            Ultimae
          </div>
          <div className="box_text">
            Lamborghini Aventador to potężna bestia na czterech kółkach, emanująca ekscytującą mocą i elegancją. Z jego
            brutalnym silnikiem V12, oszałamiającym designem i zdolnością przyspieszenia, to nie tylko samochód - to
            niezapomniane doświadczenie mocy i szybkości, które odbiera mowę.
          </div>
          <div className="box_underText">Moc silnika: 780 KM</div>
        </div>
        <div className="header_imgBox"></div>
      </div>
      <div className="containers">
        <div className="containers_imgBox"></div>
        <div className="header_box">
          <div className="box_title">Silnik</div>
          <div className="box_text">
            Lamborghini Aventador Ultimae to symfonia mocy i doskonałości inżynieryjnej, a jego serce bije w postaci
            niezwykle potężnego silnika V12. To majestatyczne dzieło sztuki mechanicznej precyzji generuje zdumiewające
            780 koni mechanicznych, napędzając ten potężny samochód na granicę ekstremalnej prędkości. Jego dźwięk to
            nie tylko melodyjna symfonia dźwięków, ale prawdziwa eksplozja energii, przyspieszająca serce do
            niebotycznych temp.
          </div>
        </div>
      </div>
      <div className="containers">
        <div className="header_box">
          <div className="box_title">Karoseria</div>
          <div className="box_text">
            Karoseria Lamborghini Aventador Ultimae to perfekcyjne połączenie śmiałości i elegancji, przywołujące
            wrażenie czystego dynamizmu. W kolorze pomarańczowym emanuje ona nie tylko intensywnością, ale również
            nawiązuje do dziedzictwa marki, nadając samochodowi unikalny charakter. Każdy detal, precyzyjnie
            wymodelowany, doskonale podkreśla aerodynamiczne kształty, nadając Ultimae nie tylko estetyczną elegancję,
            lecz również funkcjonalną doskonałość.
          </div>
        </div>
        <div className="containers_imgBox"></div>
      </div>
      <div className="containers">
        <div className="containers_imgBox4"></div>
        <div className="header_box">
          <div className="box_title">Zawieszenie</div>
          <div className="box_text">
            Zawieszenie Lamborghini Aventador Ultimae to majstersztyk inżynieryjny, który podnosi doświadczenie z jazdy
            na niesamowity poziom. Zaprojektowane z precyzją mistrza zegarmistrza, to zawieszenie dostarcza nie tylko
            nieziemskiego komfortu, ale także błyskawicznej reakcji na każdy ruch kierownicy. Jego zdolność do
            dopasowywania się do zmieniających warunków drogowych sprawia, że każdy zakręt staje się tańcem z
            grawitacją, a prosta droga staje się pasem doświadczeń wyjątkowej stabilności.
          </div>
        </div>
      </div>
      <div className="textAboveGallery">Galeria</div>
      <WSPGallery galleryImages={galleryImages} />
    </div>
  )
}

export default ProjectCar3
