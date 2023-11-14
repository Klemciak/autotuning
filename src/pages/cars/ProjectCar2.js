import React from "react"
import "../../styles/carsStyles/ProjectCar2.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Fiat500img1 from "../../graphics/fiat-500/Fiat500-img1.jpg"
import Fiat500img2 from "../../graphics/fiat-500/Fiat500-img2.jpg"
import Fiat500img3 from "../../graphics/fiat-500/Fiat500-img3.jpg"
import Fiat500img4 from "../../graphics/fiat-500/Fiat500-img4.jpg"
import Fiat500img6 from "../../graphics/fiat-500/Fiat500-img6.jpg"
import Fiat500img7 from "../../graphics/fiat-500/Fiat500-img7.jpg"
import Fiat500img8 from "../../graphics/fiat-500/Fiat500-img8.jpg"
import Fiat500img9 from "../../graphics/fiat-500/Fiat500-img9.jpg"
import Fiat500img10 from "../../graphics/fiat-500/Fiat500-img10.jpg"
import Fiat500img11 from "../../graphics/fiat-500/Fiat500-img11.jpg"
import BackToTopButton from "../../components/BackToTopButton"
const ProjectCar2 = () => {
  return (
    <div className="wrapper">
      <div className="wrapper_firstSection">
        <section className="head">
          <h2 className="head_title">Fiat 500ec Designio</h2>
          <p className="head_date">23 listopada 2022 r.</p>
          <p className="head_author">Autor: Mo Bhana</p>
          <h3 className="head_description">
            Brytyjski projektant Afza l Kahn zaprezentował Fiata 500ec Designio , wersję opartą na najlepszym
            elektrycznym samochodzie miejskim.
          </h3>
          <p className="head_text">
            Fiat 500ec Designio prezentuje styl anglo-włoski, łącząc różnorodne wpływy w zdecydowanie współczesnym
            designie.
          </p>
          <p className="head_text">
            Stylistyka przodu i tyłu została starannie odświeżona, aby zachować uwielbiane DNA 500, ale z bardziej
            nowoczesnym, agresywnym charakterem.
          </p>
          <p className="head_text">
            Ozdobiony mnóstwem sportowych i luksusowych ulepszeń, które odróżniają go od standardowego modelu 500ec, ten
            kwintesencja samochodu miejskiego wyznacza nowe standardy dzięki swojemu mocniejszemu wyglądowi.
          </p>
          <p className="head_text">
            Osłona chłodnicy Designio w błyszczącym kolorze czarnego onyksu nadaje pojazdowi niepowtarzalną tożsamość, a
            przebudowana falbana przedniego zderzaka w kolorze satynowej czerni została zainspirowana pojazdami
            wyścigowymi z przeszłości i teraźniejszości.
          </p>
        </section>
      </div>
      <section className="galleryFiat">
        <Carousel>
          <div>
            <img src={Fiat500img1} />
          </div>
          <div>
            <img src={Fiat500img2} />
          </div>
          <div>
            <img src={Fiat500img3} />
          </div>
          <div>
            <img src={Fiat500img4} />
          </div>
          <div>
            <img src={Fiat500img6} />
          </div>
          <div>
            <img src={Fiat500img7} />
          </div>
          <div>
            <img src={Fiat500img8} />
          </div>
          <div>
            <img src={Fiat500img9} />
          </div>
          <div>
            <img src={Fiat500img10} />
          </div>
          <div>
            <img src={Fiat500img11} />
          </div>
        </Carousel>
      </section>
      <div className="wrapper_secondSection">
        <section className="descriptionFiat">
          <p className="descriptionFiat_text">
            Satynowo-ceramiczna szara maska z usuniętymi diodami LED nadaje pojazdowi bardziej celowy wygląd, a wiry
            generowane przez samochody wyścigowe były inspiracją dla przebudowanego tylnego dyfuzora. Czarne listwy
            progowe i przyciemniane tylne światła dopełniają efektownego wyglądu.
          </p>
          <p className="descriptionFiat_text">
            4-ramienne 18-calowe felgi ze stopów lekkich zostały wyprodukowane w Fondmetal, legendarnej włoskiej odlewni
            i długoletnich współpracownikach Kahna, i są wykończone w kolorze hipersrebrnym, natomiast sportowe
            zawieszenie, które obniża pojazd o 25 mm, zostało opracowane we współpracy z przemysłem -liderzy H&R.
          </p>
          <p className="descriptionFiat_text">
            Kontynuacją tematu Designio są tarcze z insygniami Designio, wykończone w kolorze złotym oraz sygnowana
            przez Designio linia autokarów, podkreślająca tradycyjne brytyjskie rzemiosło.
          </p>
          <p className="descriptionFiat_text">
            Kontrastując z agresywnym wyglądem zewnętrznym, wnętrze inspirowane modą wysoką uosabia nowoczesną
            stylistykę, czerpiąc jednocześnie inspiracje z klasycznych projektów mediolańskich domów mody z lat 70.
          </p>
          <p className="descriptionFiat_text">
            Modułowy pakiet siedzeń Designio Oyster 3D obejmuje pikowane siedzenia z przodu i z tyłu wykończone wegańską
            skórą w kolorze oceanicznej turkusu, z wytłoczonym napisem Designio. W pełni karbonowa kierownica ze srebrną
            linią godziny 12 zapewnia luksusowy akcent.
          </p>
          <p className="descriptionFiat_text">
            Afzal Kahn skomentował: „Przemyślany pakiet nadwozia wraz z bogatym wnętrzem wprowadzi anglo-włoski styl na
            ulice Wielkiej Brytanii i nie tylko”.
          </p>
        </section>
      </div>
      <BackToTopButton />
    </div>
  )
}

export default ProjectCar2
