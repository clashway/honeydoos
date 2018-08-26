import React, { Component } from 'react';
import Chores from '../components/Chores/Chores';

class App extends Component {
  state = {
    currentPlayer: 'liz',
    currentScore: {
      'liz': {
        name: 'Liz',
        score: 15,
      },
      'cory': {
        name: 'Cory',
        score: 5,
      }
    },
    chores: {
      'walk': {
        name: 'Walk the Dog',
        value: 5,
      },
      'laundry': {
        name: 'Do the laundry',
        value: 10,
      },
      'dishes': {
        name: 'Dishes',
        value: 10,
      }
    }
  }

  doChore = (choreName) => {
    const player = this.state.currentPlayer;
    let currentTotals = { ...this.state.currentScore };
    currentTotals[player]['score'] = currentTotals[player].score + this.state.chores[choreName].value;
    this.setState({
      currentScore: currentTotals
    });
  }

  setCurrentPlayer = (player) => this.setState({ currentPlayer: player });

  render() {
    return (
      <div className="App">

        <h1 className="title">Honey Doo Games</h1>

        <h3 className="current-player">Welcome {this.state.currentPlayer}! </h3>

        <main className="main">
          <div className="player-toggle">
            <label htmlFor="change-player">Change who's active</label>
            <select className="change-player" onChange={(event) => this.setCurrentPlayer(event.target.value)}>
              <option value="liz" className="player-option">Liz</option>
              <option value = "cory" className="player-option">Cory</option>
            </select>
          </div>

          <Chores chores={this.state.chores} clicked={this.doChore} />

          <div className="current-score">
            <p>cory: {this.state.currentScore.cory.score}</p>
            <p>liz: {this.state.currentScore.liz.score}</p>
          </div>

        </main>
      </div>
    );
  }
}

export default App;
