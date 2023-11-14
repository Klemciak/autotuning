import React from "react"
import "../../styles/carsStyles/ProjectCar2And6.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import ShelbyGT350Simg1 from "../../graphics/Shelby-GT350S/Shelby-GT350S-img1.jpeg"
import ShelbyGT350Simg2 from "../../graphics/Shelby-GT350S/Shelby-GT350S-img2.jpeg"
import ShelbyGT350Simg3 from "../../graphics/Shelby-GT350S/Shelby-GT350S-img3.jpeg"
import ShelbyGT350Simg4 from "../../graphics/Shelby-GT350S/Shelby-GT350S-img4.jpeg"
import BackToTopButton from "../../components/BackToTopButton"
const ProjectCar6 = () => {
  return (
    <div className="wrapper">
      <div className="wrapper_firstSection">
        <section className="head">
          <h2 className="head_title">shelby mustang GT350S</h2>
          <p className="head_date">Rok: 1966</p>
          <p className="head_prototype">Factory prototype supercharged shelby</p>
          <p className="head_prototype">Moc: 406 KM </p>
          <p className="head_prototype">Pojemność skokowa: 8 cylindrów, 289 ci</p>
          <h3 className="head_description">Szczegóły i historia</h3>
          <p className="head_text">
            Debiut Mustanga w 1964 roku na zawsze zmienił świat motoryzacji i od jego prawdopodobnie skromnych początków
            to projekt GT350 prowadzony przez Carrolla Shelby'ego zapewnił nowemu samochodowi kucykowi sławę w wyścigach
            obciążonych dużą mocą i ulicznych GT. Jednym z najbardziej znaczących historycznie egzemplarzy GT350
            wyprodukowanych przez Shelby American jest Shelby Mustang SFM6S051, jedyny GT350S, jaki kiedykolwiek
            wyprodukowano. Z rzadkim lakierem Ivy Green Metallic, 6S051 jest prototypem z 1966 roku dla
            Paxton-Supercharged GT350.
          </p>
          <p className="head_text">
            Jest to pierwszy Shelby Mustang z 1965 roku pomalowany na kolor inny niż Wimbledon White i jest to jedyny
            Shelby Mustang oznaczony jako GT350S. W 2013 roku firma Shelby American Collection miała zaszczyt otrzymać
            ten wspaniały zabytkowy samochód wraz z obszerną kolekcją pamiątek w prezencie od majątku Joyce'a i Steve'a
            Yatesów z Nashville w stanie Indiana. Krążą pogłoski, że GT350S zaprojektowano specjalnie dla bankiera
            Carrolla Shelby'ego, który ścigał się nim w latach 60. XX wieku.
          </p>
        </section>
      </div>
      <section className="galleryFiatAndShelby">
        <Carousel>
          <div>
            <img src={ShelbyGT350Simg1} alt="zdjęcie Ford front" />
          </div>
          <div>
            <img src={ShelbyGT350Simg2} alt="zdjęcie Ford prawy przód" />
          </div>
          <div>
            <img src={ShelbyGT350Simg3} alt="zdjęcie Ford lewa strona" />
          </div>
          <div>
            <img src={ShelbyGT350Simg4} alt="zdjęcie Ford silnik" />
          </div>
        </Carousel>
      </section>
      <div className="wrapper_secondSection">
        <section className="specification">
          <h3 className="specification_title">Modyfikacje</h3>
          <p className="specification_text">
            Nadwozie zyskało zmodyfikowane zderzaki, dodatkowy wlot powietrza w bocznych elementach nadwozia i masce,
            większą atrapę chłodnicy i dodatkową końcówkę wydechu.
          </p>
          <p className="specification_text">
            Ponadto, samochód zyskał sportowe ogumienie, a karoseria została pomalowana w charakterystyczny sposób dla
            modeli Shelby.
          </p>
          <p className="specification_text">
            Pod kątem technicznym jednostki napędowe w modelach Shelby z serii Mustang różniły się zarówno w zależności
            od modeli GT350 lub GT500, jak i lat produkcji. W latach 1965-1967 samochód napędzał wyłącznie 4,7-litrowy
            silnik V8 typu Windsor, w 1967 pojawił się także mocniejszy wariant 5-litrowy dla wersji GT350 oraz
            7-litrowy dla wariantu GT500. W ostatnim roku produkcji wybór sprowadzono z kolei do 5,8-litrowego i
            7-litrowego V8.
          </p>
        </section>
      </div>
      <div className="wrapper_thirdSection">
        <section className="specification">
          <h3 className="specification_title">Następca</h3>
          <p className="specification_text">
            Pod postacią z 1969 roku Shelby Mustang był wytwarzany przez kolejny rok, po czym produkcja Fordów Mustangów
            we współpracy z Shelby zakończyła się w 1970 roku na kolejne 35 lat. Dopiero w 2005 roku wznowiono produkcję
            topowych wariantów Mustanga, tym razem już oferowanych pod marką Forda
          </p>
        </section>
      </div>
      <BackToTopButton />
    </div>
  )
}

export default ProjectCar6
