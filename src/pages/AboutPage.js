import React, { useState } from "react"
import PeopleList from "../components/PeopleList.js"
import "../styles/AboutPage.scss"
import BackToTopButton from "../components/BackToTopButton"
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
                {activeClass["focused-on-goal"] ? "remove" : "add"}
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
                {activeClass["energetic-and-full-of-enthusiasm"] ? "remove" : "add"}
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
                {activeClass["responsible-and-conscientious"] ? "remove" : "add"}
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
      <div className="readMore">
        <div className="readMore_box">
          <h3 className="readMore_box_title">Kunszt</h3>
          <h4 className="readMore_box_underTitle">
            "...wyjątkowa, mistrzowska biegłość w wykonywaniu czegoś, często w dziedzinie sztuki, rzemiosła lub
            umiejętności."
          </h4>
          <p className="readMore_box_text">
            Auto-Tuning oferuje niezrównane transformacje dla każdego pojazdu. Bez względu na stan techniczny czy wiek,
            nasza firma przekształci nawet najbardziej zaniedbane auta w prawdziwe arcydzieła. Nasze innowacyjne
            podejście do auto-tuningu, wsparte doświadczoną ekipą, gwarantuje nie tylko rewolucyjne poprawki techniczne,
            ale także estetyczne metamorfozy. Dzięki nam, nawet zapomniane pojazdy odzyskują swoją świetność.
          </p>
          <button className="readMore_box_moreBtn">Więcej...</button>
        </div>
        <div className="readMore_box">
          <h3 className="readMore_box_title">Historia</h3>
          <h4 className="readMore_box_underTitle">
            Auto-Tuning powstało kilka dekad temu, założone przez grupę najlepszych przyjaciół
          </h4>
          <p className="readMore_box_text">
            W latach 80., grupa zapalonych przyjaciół - mechaników, pasjonatów i melomanów, zrodziła pomysł, który
            odmienił świat motoryzacji. Ich obsesyjna miłość do podrasowywania samochodów przerodziła się w firmę
            Auto-Tuning. Zaczynając w garażu, ich innowacyjne modyfikacje szybko zdobyły uznanie. Dziś są synonimem
            doskonałości mechanicznej, a ich historia to legenda, która napędza marzenia kolejnych pokoleń maniaków
            drogowego szaleństwa.
          </p>
          <button className="readMore_box_moreBtn">Więcej...</button>
        </div>
        <div className="readMore_box">
          <h3 className="readMore_box_title">Karieria</h3>
          <h4 className="readMore_box_underTitle">Szukamy utalentowanych tuningo-świrów może to właśnie Ty.</h4>
          <p className="readMore_box_text">
            Auto-Tuning nieustannie rozwija się, a teraz szuka świeżych umiejętności dołączając do swojego zespołu.
            Zapraszamy młode talenty, pasjonatów motoryzacji i kreatywnych myślicieli, by wspólnie pisać kolejne
            rozdziały historii naszej firmy. Dołącz do nas, przekształć swoje zamiłowanie w profesję, a razem z nami
            kształtuj przyszłość auto-tuningu!
          </p>
          <button className="readMore_box_moreBtn">Więcej...</button>
        </div>
      </div>
      <BackToTopButton />
    </div>
  )
}

export default AboutPage
