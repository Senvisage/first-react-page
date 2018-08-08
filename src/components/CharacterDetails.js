import React from 'react'

import './CharacterDetails.css'

const CharacterDetails = ({ character }) => (
  <p className="CharacterDetails">
    {character.name}
  </p>
)
export default CharacterDetails
