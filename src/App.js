import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  constructor() {
    super()

    this.state = {
      bots: [],

    }

  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
        .then(res => res.json())
        .then(bots => this.setState({bots}))
  }

  selectBot = (id) => {
    this.setState({
      bots: this.state.bots.map(bot => {
        if (bot.id === id) {

        }
      })
    })
  }

  render() {
    console.log(this.state.bots)
    return (
      <div className="App">

        <BotsPage bots={this.state.bots} />
      </div>
    );
  }
}

export default App;
