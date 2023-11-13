import React from "react"
import e30img1 from "../../graphics/bmw-e30/bmw-e30-img1.jpg"
import "../../styles/carsStyles/ProjectCar1.scss"
const ProjectCar1 = () => {
  return (
    <div className="wrapper">
      <section className="title">
        <img src={e30img1} alt="Bmw e30, widok lewy przód" className="title_img" />
        <div className="title_text">
          power coupé par <br />
          excellence: 715 km
          <br /> mh2 700e
        </div>
      </section>
      <section className="specifications">
        <div className="specifications_title">Dane Techniczne</div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Silnik</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">Sześciocylindrowy rzędowy silnik o pojemności 3,5 litra</li>

              <li className="specifications_box_list_text">Turbosprężarka MANHART</li>

              <li className="specifications_box_list_text">Chłodnica powietrza doładowującego MANHART</li>

              <li className="specifications_box_list_text">
                Blokowany mechanizm różnicowy MANHART firmy Drexler z dodatkową chłodnicą
              </li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Wydajność</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">Oryginał: 200 KM i 240 Nm</li>
              <li className="specifications_box_list_text">Dostrojone: 405 KM i 650 Nm</li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Wydech</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">Układ wydechowy MANHART</li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Zawieszenie</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">Zestaw zawieszenia MANHART firmy H&R</li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Koła i opony</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">
                MANHART Concave One w kolorze jedwabiście matowym czarnym
              </li>
              <li className="specifications_box_list_text">FA: 8,5 x 19” (215/35 R19)</li>
              <li className="specifications_box_list_text">RA: 9,5 x 19” (245/30 R19)</li>
              <li className="specifications_box_list_text">Dekoracja obręczy MANHART w kolorze czerwonym</li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Hamulce</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">Zestaw hamulcowy MANHART</li>
              <li className="specifications_box_list_text">FA: 330 x 32 mm / 4-tłoczkowe zaciski Brembo</li>
              <li className="specifications_box_list_text">RA: 282 x 12 mm / zaciski standardowe</li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Wnętrze</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">Wnętrze skórzane MANHART w kolorze kardynalnej czerwieni</li>
              <li className="specifications_box_list_text">Kierownica MANHART firmy Momo (350 mm)</li>
              <li className="specifications_box_list_text">Wyświetlacz danych MANHART</li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Wygląd zewnętrzny</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">Przedni spoiler MANHART Carbon</li>
              <li className="specifications_box_list_text">Tylny spoiler MANHART ze skrzydłem z włókna węglowego</li>
              <li className="specifications_box_list_text">
                Okładzina winylowa MANHART w kolorze matowej zieleni z zestawem naklejek w kolorze czerwonym
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectCar1
