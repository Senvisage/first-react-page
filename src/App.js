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
        isDead: false,
        story: `
          54B2 is the king of the Oxsecians. He has watched over the lives of his people for many years.
          The technology devised by the Oxsecians spawned possibilities as innumerable as the stars. It was all but inevitable that they would go on to create life with their own hands.
          This proved to be a double-edged sword, however. The miracles they produced turned monstrous.
          Their world's lush natural beauty vanished, the landscape transforming into a desolate wasteland littered with corpses.
          A horrific cataclysm ushered in even darker days. It also brought appalling self-interest to light, and those mortal failings raged out of control.
          The king lost a lifelong friend. He then had to give up his daughter.
          He shed bitter tears over loss after loss. And grief coiled about his heart like a serpent and squeezed, until the last of its warmth was gone.`
      },
      {
        name: 'Andelucia',
        level: 13,
        isDead: false,
        story: `
          Andelucia is a wayfaring beastwoman. The gifts of keen intuition and physical prowess contribute to her formidable spearmanship.
          Her fluid grace, dynamically supple limbs, and gleaming spearhead blazing exquisite trails through the air are nothing short of mesmerizing. They instantly captivate anyone who sees her in action.
          She is shockingly lackadaisical about her daily lifestyle, however. To be blunt, her room is filthy.
          During long stays at inns on the road, her rooms tend to be littered with cups of half-finished drinks, some sprouting mold.
          But beggars can't be choosers, and travelers can't always live in clean places, after all. According to Andelucia, at least.
          Nonetheless, the innkeepers never utter a word of complaint. Andelucia apparently buys out the entire place well in advance of her arrival. And she's an exceptionally big spender.
          Her departures are even more mystifying. Once she's ready to set out again, a retinue of housemaids allegedly appears out of nowhere and leaves the place immaculate, even tidier than before she arrived.
          Who in the world is she, seriously?
          This question comes up often amongst the innkeepers' network. `
      },
      {
        name: 'Annu',
        level: 57,
        isDead: true,
        story: `
          An actress who makes a living by performing a nearly forgotten traditional dance. Hardly anyone has heard of her.
          Still, some keen observers have noticed her and are supporting her in secret.
          Rumors spread about this rare performer of the ancient dance, and she was thrust into the spotlight.
          After all of her hard work studying every day, her dance was incorporated into a government program for culture promotion, and suddenly she was nominated as a culture representative for her country. `
      },
      {
        name: 'Arionne',
        level: 5,
        story: `
          A stunning young sorceress. Thirteen years old.
          She protects dwellers of the strange little town south of her castle from the evil Witch of the West.
          Although she looks like a little girl, her eyes reveal great wisdom and confidence. But when you look deeper into them, you begin to notice a strange emptiness, a void, and for some reason you can't help but shudder in fear. `
      },
      {
        name: 'Ashe',
        level: 16,
        story: `
          Ashe works as a castle wall guard in a small country. But it's a rural castle in a remote area, so he never really has to get violent with anyone.
          Regardless, he trains his body every day without fail, just in case.
          One day, intruders turned up out of nowhere. The watchtower soldiers had been sleeping at the time, so they didn't notice until late.
          By the time they sounded the alarm bells, the intruders had surrounded the castle walls. The fate of the little country seemed sealed.
          Naturally, Ashe was on duty that night. When he realized his time had come, he was practically licking his lips in delight. `
      },
      {
        name: "Beau'ne",
        level: 58,
        isDead: true,
        story: `
          Beau'ne lights up the lizardfolk world as Miss Universe.
          She is also a leading swordswoman in competitive battles at the arena, towering at the forefront of one of the few spectator sports remaining. Graced with both deadly strength and beauty, Beau'ne has been dubbed a true femme fatale.
          A glimpse of her seductively supple tail sends men into a frenzy. The arena's sales consequently skyrocket whenever she makes an appearance.
          One day, an arena janitor found one of Beau'ne's scales lying in the dust, presumably the casualty of a heated skirmish. It reflected light beautifully, glittering with all the colors of the rainbow.
          The janitor put it up for auction, half considering it a joke. It sold for enough money to build a new house.`
      },
    ],
    activeCharacter: {
      name: "Anonymous",
      level: "n/a",
      isDead: false,
    }
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
