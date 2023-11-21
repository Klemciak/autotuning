import React, { useState, useEffect } from "react"
import "../styles/AboutPage.scss"
const API = "https://peoplegeneratorapi.live/api/person/10"

const PeopleList = () => {
  const [peopleData, setPeopleData] = useState(null)

  useEffect(() => {
    const fetchData = () => {
      fetch(API)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok")
          }
          return response.json()
        })
        .then((data) => {
          setPeopleData(data)
          console.log(data)
        })
        .catch((error) => {
          console.error("Error fetching person data:", error)
        })
    }

    fetchData()
  }, [])

  return (
    <div className="personsWrap">
      <h2 className="personsWrap_title">- Nasz najlepszy sztab -</h2>
      {peopleData && (
        <div className="personsWrap_persons">
          {peopleData.map((person, index) => (
            <div key={index} className="personsWrap_persons_person">
              <img
                src={`https://xsgames.co/randomusers/assets/avatars/male/${Math.floor(Math.random() * 75) + 1}.jpg`}
                className="person_img"
                alt="zdjęcie pracownika"
              ></img>
              <p className="person_name">{`${person.name}`}</p>
              <p className="person_email">{person.email}</p>
              <p className="person_nick">{`${person.username}`}</p>
            </div>
          ))}
        </div>
      )}
      <p className="personsWrap_description">
        Nasz wyjątkowy zespół pasjonatów tuningowania samochodów to nie tylko mechanicy, ale artyści drogi, którzy
        przekształcają każde auto w manifestację wyrafinowanego stylu. Znając tajniki mechaniki pojazdowej, doskonale
        rozumiemy, jak podkreślić moc i wydajność, jednocześnie nadając pojazdowi unikalny charakter. Nie tylko
        spełniamy oczekiwania techniczne, ale także dbamy o estetykę, aby każde nasze dzieło było niezapomnianym
        przeżyciem dla kierowcy. Nasza pasja do doskonalenia detali i świadomość najnowszych osiągnięć w dziedzinie
        motoryzacji sprawiają, że nasz sztab to prawdziwi pionierzy stylu i innowacji w świecie tuningowania samochodów.
        Jesteśmy dumni z dziedzictwa, jakie tworzymy, nadając każdemu pojazdowi charakter, który przyciąga spojrzenia i
        dostarcza niezapomnianą przyjemność z jazdy. Nasz sztab, zawsze kierując się pasją, pragnie zaoferować klientom
        nie tylko doskonałą wydajność, ale również niepowtarzalne doznania w świecie spersonalizowanych motoryzacyjnych
        arcydzieł.
      </p>
    </div>
  )
}

export default PeopleList
