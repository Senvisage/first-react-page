import React, { Component } from 'react';

import './CharacterDetails.css'

class CharacterDetails extends Component {

  handleKillButtonClick = () => {
    this.props.killSwitch(this.props.character.name);
  }

  render() {
    const {character} = this.props;
    if(character !== undefined) {
      return (
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
              <li><strong>Status:</strong>&nbsp;{character.isDead ? "Dead" : "Wanted"}
                {!character.isDead && (
                  <button onClick={this.handleKillButtonClick}>I KILLED IT !</button>
                )}
              </li>
            </ul>
            <div className="story">
              {character.story || "..."}
            </div>
          </div>
        </div>
      );
    }
    return (
      <p>Choisis un Héros !</p>
    );
  }
}
export default CharacterDetails
