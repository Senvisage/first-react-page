import React from 'react'

import './CharacterListItem.css'

const CharacterListItem = ({ name, level, isDead=false }) => (
  <li className="CharacterListItem">
    <div className="container">
      <img src={`img/${name}_icon.png`} alt={`${name}`} className={isDead?"dead":""}/>
    </div>
    <p>
      {name} ({level}) - {isDead ? "Dead" : "Alive"}
    </p>
  </li>
)
export default CharacterListItem