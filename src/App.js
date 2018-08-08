import React, { Component } from 'react';
import './App.css';

import CharacterListItem from './components/CharacterListItem'

class App extends Component {
  state = {
    characters: [
      {
        name: '54B2',
        level: 90,
        isDead: false
      },
      {
        name: 'Andelucia',
        level: 13,
        isDead: false
      },
      {
        name: 'Annu',
        level: 57,
        isDead: true
      },
      {
        name: 'Arionne',
        level: 5,
      },
      {
        name: 'Ashe',
        level: 16,
        isDead: true
      },
      {
        name: "Beau'ne",
        level: 58,
        isDead: false
      },
    ],
    activeCharacter: {}
  }

  render() {
    const {characters} = this.state;

    return (
      <div className="App">
        <header>
          <h1>Welcome to TB Adventurers !</h1>
        </header>
        <main>
          <ul>
            {characters.map((character, index) => (
              <CharacterListItem name={character.name} level={character.level} isDead={character.isDead | "false"} index={index} />
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
