import React from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "../styles/parallax.scss"
import { Parallax, Pagination, Autoplay } from "swiper/modules"
const StartPage = () => {
  return (
    <>
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
          disableOnInteraction: true,
        }}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image": "url(https://4kwallpapers.com/images/wallpapers/lamborghini-5120x2880-11125.jpeg)",
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
    </>
  )
}

export default StartPage
