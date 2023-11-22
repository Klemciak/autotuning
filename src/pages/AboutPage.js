import React, { useState } from "react"
import PeopleList from "../components/PeopleList.js"
import "../styles/AboutPage.scss"
const AboutPage = () => {
  const [activeClass, setActiveClass] = useState(false)
  const toggleClass = (element) => {
    setActiveClass((elements) => ({
      ...elements,
      [element]: !elements[element],
    }))
  }
  return (
    <div className="AboutPageWrap">
      <PeopleList />
      <div className="our">
        <div className="our_valuesWrap">
          <div className="values">
            <h2 className="values_title">Nasze wartości</h2>
            <div className="values_box">
              <span class="material-symbols-outlined values_box_img">workspace_premium</span>
              <div className="values_box_text">
                <p className="values_box_text_title">Obsługa klienta</p>
                <p className="values_box_text_text">
                  Zatrudniamy odpowiednich ludzi i szkolimy ich, aby zapewniali wyjątkową obsługę.
                </p>
              </div>
            </div>
            <div className="values_box">
              <span class="material-symbols-outlined values_box_img">build_circle</span>
              <div className="values_box_text">
                <p className="values_box_text_title">Bezpieczeństwo i niezawodność</p>
                <p className="values_box_text_text">
                  99,5% naszych tuningów odbywa się bez żadnych późniejszych problemów.
                </p>
              </div>
            </div>
            <div className="values_box">
              <span class="material-symbols-outlined values_box_img">diversity_3</span>
              <div className="values_box_text">
                <p className="values_box_text_title">Praca zespołowa</p>
                <p className="values_box_text_text">
                  Nasz zespół jest zgrany, dlatego tworzymy dzieła sztuki w zakresie motoryzacji.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="our_characteristicWrap">
          <div className="characteristic">
            <h2 className="characteristic_title">Nasz charakter</h2>
            <div className="characteristic_box">
              <span
                class="material-symbols-outlined characteristic_box_img"
                onClick={() => toggleClass("focused-on-goal")}
              >
                {activeClass["focused-on-goal"] ? "add" : "remove"}
              </span>
              <div className="characteristic_box_text">
                <p className="characteristic_box_text_title" onClick={() => toggleClass("focused-on-goal")}>
                  Skoncentrowani na celu
                </p>
                <p className={`characteristic_box_text_text ${activeClass["focused-on-goal"] ? "active" : ""}`}>
                  Mamy silne poczucie celu. Jesteśmy zdeterminowani, aby osiągnąć swoje cele i gotowi do podejmowania
                  trudów, aby to zrobić.
                </p>
              </div>
            </div>
            <div className="characteristic_box">
              <span
                class="material-symbols-outlined characteristic_box_img"
                onClick={() => toggleClass("energetic-and-full-of-enthusiasm")}
              >
                {activeClass["energetic-and-full-of-enthusiasm"] ? "add" : "remove"}
              </span>
              <div className="characteristic_box_text">
                <p
                  className="characteristic_box_text_title"
                  onClick={() => toggleClass("energetic-and-full-of-enthusiasm")}
                >
                  Energiczni i pełeni entuzjazmu
                </p>
                <p
                  className={`characteristic_box_text_text ${
                    activeClass["energetic-and-full-of-enthusiasm"] ? "active" : ""
                  }`}
                >
                  Jesteśmy pełni energii, entuzjazmu i zawsze gotowi do działania. Cenimy aktywność fizyczną i umysłową.
                </p>
              </div>
            </div>
            <div className="characteristic_box">
              <span
                class="material-symbols-outlined characteristic_box_img"
                onClick={() => toggleClass("responsible-and-conscientious")}
              >
                {activeClass["responsible-and-conscientious"] ? "add" : "remove"}
              </span>
              <div className="characteristic_box_text">
                <p
                  className="characteristic_box_text_title"
                  onClick={() => toggleClass("responsible-and-conscientious")}
                >
                  Odpowiedzialni i sumienni
                </p>
                <p
                  className={`characteristic_box_text_text ${
                    activeClass["responsible-and-conscientious"] ? "active" : ""
                  }`}
                >
                  Jesteśmy odpowiedzialni, sumienni i zawsze dążymy do wykonania powierzonych nam zadań z najwyższą
                  starannością.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
