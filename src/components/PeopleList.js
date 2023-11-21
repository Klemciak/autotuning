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
    </div>
  )
}

export default PeopleList
