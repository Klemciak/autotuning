import React from "react"
import rollsRoyceImg1 from "../../graphics/rolls-royce-ghost/rolls-royce-img1.jpg"
import rollsRoyceImg2 from "../../graphics/rolls-royce-ghost/rolls-royce-img2.jpg"
import rollsRoyceImg3 from "../../graphics/rolls-royce-ghost/rolls-royce-img3.jpg"
import rollsRoyceImg4 from "../../graphics/rolls-royce-ghost/rolls-royce-img4.jpg"
import rollsRoyceImg5 from "../../graphics/rolls-royce-ghost/rolls-royce-img5.jpg"
import rollsRoyceImg6 from "../../graphics/rolls-royce-ghost/rolls-royce-img6.jpg"
import rollsRoyceImg7 from "../../graphics/rolls-royce-ghost/rolls-royce-img7.jpg"
import rollsRoyceImg8 from "../../graphics/rolls-royce-ghost/rolls-royce-img8.jpg"

import WSPGallery from "../../components/WSPGallery"
import "../../styles/carsStyles/ProjectCar3And5.scss"
import BackToTopButton from "../../components/BackToTopButton"

const ProjectCar5 = () => {
  const galleryImages = [
    {
      img: rollsRoyceImg1,
    },
    {
      img: rollsRoyceImg2,
    },
    {
      img: rollsRoyceImg3,
    },
    {
      img: rollsRoyceImg4,
    },
    {
      img: rollsRoyceImg5,
    },
    {
      img: rollsRoyceImg6,
    },
    {
      img: rollsRoyceImg7,
    },
    {
      img: rollsRoyceImg8,
    },
  ]
  return (
    <div className="wrap">
      <div className="header">
        <div className="header_box">
          <div className="box_title">
            Rolls Royce <br />
            Ghost I
          </div>
          <div className="box_text">
            Rolls-Royce Ghost I to epoka luksusu motoryzacyjnego, z eleganckim designem i wnętrzem, które przypomina
            królewskie sanktuarium. Jego potężny silnik i innowacyjne rozwiązania technologiczne nadają podróżowaniu
            niezrównany komfort. Ghost I to nie tylko samochód, to ikona klasy, łącząca precyzję rzemiosła z
            nieprzemijającym luksusem.
          </div>
          <div className="box_underText">Moc silnika: 602 KM</div>
        </div>
        <div className="header_imgBox royce"></div>
      </div>
      <div className="containers">
        <div className="containers_imgBox royce"></div>
        <div className="header_box">
          <div className="box_title">Silnik</div>
          <div className="box_text">
            Silnik Rolls-Royce Ghost I jest jak potężny muzyk w symfonii mocy, dostarczając nie tylko imponującej
            prędkości, lecz także bezwzględnego komfortu. To majestatyczne dzieło inżynierii, gdzie potężny V12, niczym
            święta orkiestra, rozpoczyna pełną harmonii podróż przez luksusowy świat. Jego nieprzerwane dostarczanie
            mocy sprawia, że każde dotknięcie gazu to moment czystej ekscytacji, a symfonia dźwięków silnika przypomina
            o wyjątkowym dziedzictwie luksusu motoryzacyjnego.
          </div>
        </div>
      </div>
      <div className="containers">
        <div className="header_box">
          <div className="box_title">Wnętrze</div>
          <div className="box_text">
            Wnętrze Rolls-Royce Ghost I to wyjątkowe święto zmysłów, gdzie każdy detal jest mistrzowsko wymodelowany, by
            dostarczyć absolutnego komfortu i niepowtarzalnego luksusu. Przestronna kabina jest jak ekskluzywny salon,
            wypełniony najwyższej jakości materiałami, takimi jak miękka skóra i wykwintne drewno, tworzące atmosferę
            godną pałacu. Fotel kierowcy i pasażerów to trony wygodnych przeżyć, a precyzyjne detale, jak ręcznie
            wykonane zdobienia, tworzą symfonię rzemiosła.
          </div>
        </div>
        <div className="containers_imgBox royce"></div>
      </div>
      <div className="containers">
        <div className="containers_imgBox4 royce"></div>
        <div className="header_box">
          <div className="box_title">Karoseria</div>
          <div className="box_text">
            Karoseria Rolls-Royce Ghost I to arcydzieło projektowe, gdzie elegancja i potęga spotykają się w
            perfekcyjnej harmonii. Linie samochodu są jak płynne ruchy pędzącego wiatru, tworzące niepowtarzalny
            rysunek, który przykuwa wzrok i emanuje nieosiągalnym prestiżem. Kolorystyka, zwłaszcza w
            charakterystycznych odcieniach Rolls-Royce, nadaje mu nie tylko indywidualny charakter, ale także wydobywa
            każdy detal z najwyższą precyzją.
          </div>
        </div>
      </div>
      <div className="textAboveGallery">Galeria</div>
      <WSPGallery galleryImages={galleryImages} />
      <BackToTopButton />
    </div>
  )
}

export default ProjectCar5
