import './ApiDemo.css'
import { useState, useEffect } from 'react'

function ApiDemo() {
  let [cards, setCards] = useState([])

  async function getDataFromAPI() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let card = await res.json()
    setCards(card)
  }

  useEffect(() => {
    getDataFromAPI()
  }, [])

  return (
    <div className="grid-container">
      {cards.map((user) => (
        <div className="grid-container">
            <div key={user.id} className="card">
            <h3 className="title">{user.name}</h3>
            <p className="email">{user.email}</p>
            <p className="phone">{user.phone}</p>
            </div>
        </div>

      ))}
    </div>
  )
}

export default ApiDemo
