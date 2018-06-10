import React from 'react';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import cards from '../cards.json';
import '../css/Card.css';
import '../css/App.css';

let correctGuesses = 0;
let bestScore = 0;
let clickMessage = `Click the 12 unique images without clicking an image twice!`;

class App extends React.Component {

  state = {
    cards,
    correctGuesses,
    bestScore,
    clickMessage
  };

justClicked = id => {
  // Make a copy of cards array state 
  const cards = this.state.cards;

  // Filter for the clicked card's id
  const clickedMatch = cards.filter(card => card.id === id);

  // If the matched image's clicked value is already true, 
  // do the game over actions
  if (clickedMatch[0].clicked){
    this.gameOver();
  
  // Else if clicked = false, player continues
  } else if (correctGuesses < 11) {
    this.continuePlay(clickedMatch);
  
  // Winner!
  } else {
    this.winGame(clickedMatch);
  }
};

gameOver() {
  correctGuesses = 0;
  clickMessage = "Already clicked that image! Start Over"

  cards.map((currElement, i) => {
    return cards[i].clicked = false;
  });

  this.setState({ clickMessage });
  this.setState({ correctGuesses });
  this.setState({ cards });
};

continuePlay(clickedMatch) {
  // Set its value to true
  clickedMatch[0].clicked = true;

  // increment guesses counter
  correctGuesses++;
  
  clickMessage = "Nice! Keep clicking!";

  if (correctGuesses > bestScore) {
      bestScore = correctGuesses;
      this.setState({ bestScore });
  }

  // Shuffle the array
  cards.sort(function(a, b){return 0.5 - Math.random()});

  // Set this.state.cards equal to the new cards array
  this.setState({ cards });
  this.setState({ correctGuesses });
  this.setState({ clickMessage });
};

winGame(clickedMatch) {
  // Set its value to true
  clickedMatch[0].clicked = true;

  // restart the guesses counter
  correctGuesses = 0;

  // Winner message
  clickMessage = "WOW!!! You got ALL of them!!! Try it again!";
  bestScore = 12;
  this.setState({ bestScore });
  
  cards.map((currElement, i) => {
    return cards[i].clicked = false;
  });

  // Shuffle the array
  cards.sort(function(a, b){return 0.5 - Math.random()});

  // Set this.state.cards equal to the new cards array
  this.setState({ cards });
  this.setState({ correctGuesses });
  this.setState({ clickMessage });
};

  render() {
    return (
      <div>
        <Header />
          <h1>Memory Game</h1>
          <h3 className="scoreSummary">
            {this.state.clickMessage}
          </h3>
                
          <h3 className="scoreSummary">
              Correct Guesses This Game: {this.state.correctGuesses} 
          </h3>
          <h3 className="scoreSummary">
              Your Best Score: {this.state.bestScore} 
          </h3>
          <div className="flexContainer">
            {this.state.cards.map(card => (
              <Card
              justClicked={this.justClicked}
              id={card.id}
              class={card.class}
              key={card.id}
              name={card.name}
              image={card.image} 
              />
            ))}
          </div>
        <Footer />
      </div>
    )
  }
}

export default App;
