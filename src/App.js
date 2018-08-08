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
    console.log("Searching for adequate adventurers (name="+name+")...");
    //console.log(this.searchCharactersByName(name)[0]);  //OK
    this.setState({ activeCharacter: this.searchCharactersByName(name)[0] });
    console.log(this.state);
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
          <p>
            {activeCharacter.name || "Choisis un Héros !"}
          </p>
        </main>
      </div>
    );
  }
}

export default App;
