import React from 'react'

import './CharacterDetails.css'

const CharacterDetails = ({ character }) => (
  <div className="CharacterDetails">
    <figure>
      <img src={`img/${character.name}.png`} alt={`${character.name}`} />
      <figcaption>
        {character.name}
      </figcaption>
      {character.isDead && (
        <img className="youAreDead" src="img/deceased.png" alt="YOU ARE DEAD."/>
      )}
    </figure>

    <div className="characterInfo">
      <ul>
        <li><strong>Name:</strong>&nbsp;&nbsp;&nbsp;{character.name}</li>
        <li><strong>Level:</strong>&nbsp;&nbsp;{character.level}</li>
        <li><strong>Status:</strong>&nbsp;{character.isDead ? "Dead" : "Wanted"}</li>
      </ul>
      <div className="story">
        {character.story || "..."}
      </div>
    </div>
  </div>
)
export default CharacterDetails
