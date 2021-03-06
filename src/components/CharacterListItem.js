import React from 'react'

import './CharacterListItem.css'

const CharacterListItem = ({ name, level, onClick, isDead=false }) => (
  <li className="CharacterListItem" onClick={() => onClick(name)}>
    <div className="container">
      <img src={`img/${name}_icon.png`} alt={`${name}`} className={isDead?"dead icon":"icon"} />
      {isDead && (
        <img className="youAreDead" src="img/deceased.png" alt="YOU ARE DEAD." />
      )}
    </div>
    <p>
      {name}
    </p>
  </li>
)
export default CharacterListItem
