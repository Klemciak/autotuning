import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "../styles/parallax.scss"
import "../styles/StartPage.scss"
import { Parallax, Pagination, Autoplay } from "swiper/modules"
import BackToTopButton from "../components/BackToTopButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
const StartPage = () => {
  const [team, setTeam] = useState(false)
  const [project, setProject] = useState(false)
  const [shop, setShop] = useState(false)
  const [contact, setContact] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setTeam(true)
      }
      if (window.scrollY > 700) {
        setProject(true)
      }
      if (window.scrollY > 1400) {
        setShop(true)
      }
      if (window.scrollY > 2100) {
        setContact(true)
      }
    })
  }, [])
  return (
    <div className="StartPageWrap">
      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
        }}
        speed={3000}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Autoplay]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: "url(https://4kwallpapers.com/images/wallpapers/lamborghini-5120x2880-11125.jpeg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="swiper_box">
            <div className="titleSwiper" data-swiper-parallax="-300">
              Tunerzy, na których możesz polegać
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Tworzymy arcydzieła
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Nasza firma oferuje usługi tuningu samochodowego, które opierają się na solidności, doświadczeniu i
                pasji. Zaufaj nam, aby uczynić Twój pojazd unikatowym. Nasza ekipa ekspertów to gwarancja perfekcyjnego
                dopracowania detali, byś mógł cieszyć się doskonałym stylem i osiągami. Dlaczego my? Bo tuning to dla
                nas sztuka, którą pielęgnujemy z pełnym zaangażowaniem.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_box">
            <div className="titleSwiper" data-swiper-parallax="-300">
              Twoje marzenia, nasza pasja
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Spełnimy je
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Jesteśmy tu, aby uczynić Twoje marzenia o idealnym samochodzie rzeczywistością. Nasza pasja do tuningu
                wykracza poza mechaniczne poprawki - to dążenie do stworzenia czegoś wyjątkowego. Nie patrzymy na to
                jako na pracę, lecz jako na sztukę, której celem jest spełnianie oczekiwań naszych klientów. Zaufaj nam,
                abyś mógł cieszyć się autem, które odzwierciedla Twoją wyjątkowość.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_box">
            <div className="titleSwiper" data-swiper-parallax="-300">
              Niezrównane umiejętności i zaangażowanie
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Stworzeni dla aut
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Nasza pasja do tuningu samochodowego przekłada się na unikalne umiejętności, które gwarantują
                perfekcyjne rezultaty. Nie jest to dla nas jedynie praca - to sposób życia. Każdy detal jest starannie
                dopracowany, ponieważ wierzymy, że każdy pojazd zasługuje na indywidualne podejście. Dołącz do naszej
                społeczności miłośników doskonałego stylu i osiągów!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="teamWrap">
        <div className={`teamBox ${team ? "teamSlide" : ""}`}>
          <h2 className="teamBox_title">Nasz zespół</h2>
          <p className="teamBox_underTitle">
            "Tuning to magia, która ożywia maszyny. Dźwięki silnika to emocjonalna melodia, a poprawki to pędzle na
            płótnie samochodu. To nie tylko moc, ale także dusza i indywidualność. Tuning to krótka podróż w świat
            nieograniczonych możliwości, gdzie samochód staje się wyrazem twórczej pasji. To artystyczna ekspresja,
            podkreślająca, że podróż jest równie istotna co cel."
          </p>
          <p className="teamBox_text">
            Nasz zespół to doświadczeni eksperci w tuningu, z pasją do przerabiania aut. Specjalizujemy się w twardych
            modyfikacjach, podkreślając charakter i siłę pojazdu. Nie boimy się wyzwań, a nasze wieloletnie
            doświadczenie pozwala nam dokładnie dostosować każdy detal, sprawiając, że samochód staje się potężnym,
            indywidualnym dziełem sztuki na czterech kołach.
          </p>
          <Link to="/about">
            <button className="teamBox_button">Więcej..</button>
          </Link>
        </div>
        <div className={`teamImg ${team ? "teamSlide" : ""}`}></div>
      </div>
      <div className="projectWrap">
        <div className="projectImg"></div>
        <div className={`project ${project ? "projectSlide" : ""}`}>
          <h2 className="project_title">Nasze projekty</h2>
          <p className="project_text">
            Sprawdź nasze poprawki w akcji! Zmieniliśmy nudne samochody w bestie na kołach. Zobacz, jak nasze ręce
            czarodziejów ulepszyły silniki, dodając im sznytu i mocy. Od spoilerów po nowe felgi, nasze projekty to
            kwintesencja tuningu. Nie wierzysz? Kliknij tu i zobacz sam! Nasze prace mówią same za siebie, bo w tym
            biznesie pojęcie "zwykłe" nie istnieje. To nie jest poezja, to praktyka na czterech kółkach!
          </p>
          <Link to="/project">
            <button className="project_button">Więcej..</button>
          </Link>
        </div>
      </div>
      <div className="shopWrap">
        <div className={`shopImg ${shop ? "shopSlide" : ""}`}></div>
        <div className={`shopBox ${shop ? "shopSlide" : ""}`}>
          <h2 className="shopBox_title">Nasz sklep</h2>
          <p className="shopBox_underTitle">
            "Twój samochód to nie tylko metal i technologia. To manifestacja twojego charakteru, a sklep z częściami
            samochodowymi to świątynia, dzięki której doskonałość staje się możliwa."
          </p>
          <p className="shopBox_text">
            Zapraszamy do naszego sklepu z częściami samochodowymi! Odkryj bogactwo wysokiej jakości produktów, które
            pozwolą podnieść wydajność i styl Twojego pojazdu. Znajdziesz tu wszystko, czego potrzebujesz, aby zadbać o
            swoje auto. Zapraszamy do zakupów, gdzie pasja motoryzacyjna spotyka się z szerokim wyborem części
            doskonałej jakości!
          </p>
          <Link to="/shop">
            <button className="shopBox_button">Więcej..</button>
          </Link>
        </div>
      </div>
      <div className="contactWrap">
        <div className={`contactBox ${contact ? "contactSlide" : ""}`}>
          <h2 className="contactBox_title">Kontakt</h2>
          <p className="contactBox_underTitle">Tymbark, ul. Polna 448, 34-650</p>
          <p className="contactBox_text">
            Staramy się spełnić wszystkie oczekiwania, w razie jakich kolwiek pytań odezwij się.
          </p>
          <div className="contactBox_socialMedia">
            <Link to="/contact" className="contactBox_socialMedia_one">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link to="/contact" className="contactBox_socialMedia_one">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="/contact" className="contactBox_socialMedia_one">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7294.488411002833!2d20.323385302712964!3d49.729792682248224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47161b190eea7aa1%3A0xc0e2b27138e3267e!2sTymbark!5e0!3m2!1spl!2spl!4v1699467654304!5m2!1spl!2spl"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
          className={`contactMap ${contact ? "contactSlide" : ""}`}
        ></iframe>
      </div>
      <BackToTopButton />
    </div>
  )
}

export default StartPage
