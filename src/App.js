import React, { Component } from 'react';
import './App.css';

import CharacterListItem from './components/CharacterListItem'
import CharacterDetails from './components/CharacterDetails'

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
      },
      {
        name: "Beau'ne",
        level: 58,
        isDead: true
      },
    ],
    activeCharacter: {}
  }

  searchCharactersByName = name => this.state.characters.filter((char) => {
    if(char.name.toLowerCase().indexOf(name.toLowerCase())!==-1)
      return char;
    return undefined;
  });

  handleCharacterListItemClick = name => {
    this.setState({ activeCharacter: this.searchCharactersByName(name)[0] });
  }

  render() {
    const {characters, activeCharacter} = this.state;
    return (
      <div className="App">
        <header>
          <h1>Welcome to TB Adventurers !</h1>
        </header>
        <main>
          <ul>
            {characters.map((character, index) => (
              <CharacterListItem
                key={index}
                name={character.name}
                level={character.level}
                isDead={character.isDead | "false"}
                onClick={this.handleCharacterListItemClick} />
            ))}
          </ul>
          <CharacterDetails character={activeCharacter} />
        </main>
      </div>
    );
  }
}

export default App;
