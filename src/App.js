import React, { Component } from 'react';
import './App.css';

import CharacterListItem from './components/CharacterListItem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to TB Adventurers !</h1>
        </header>
        <main>
          <ul>
            <CharacterListItem name="54B2" level="90"/>
            <CharacterListItem name="Andelucia" level="13"/>
            <CharacterListItem name="Annu" level="57" isDead="true"/>
            <CharacterListItem name="Arionne" level="05"/>
            <CharacterListItem name="Ashe" level="16" isDead="true"/>
            <CharacterListItem name="Beau'ne" level="58"/>
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
