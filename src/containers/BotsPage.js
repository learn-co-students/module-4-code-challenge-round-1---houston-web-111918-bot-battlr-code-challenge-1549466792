import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = {
    bots: [],
    selectedBots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => {
      bots.forEach(bot => bot.selected = false)
      this.setState({bots})
    })
  }

  addToSelectedBots = (bot) => {
    if(!bot.selected){
      bot.selected = true
      this.setState({
        selectedBots: [...this.state.selectedBots, bot]
      })
    }
  }

  removeFromSelectedBots = (bot) => {
    this.setState({
      selectedBots: this.state.selectedBots.splice(this.state.selectedBots.indexOf(bot),1)
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.selectedBots} addToSelectedBots={this.addToSelectedBots} removeFromSelectedBots={this.removeFromSelectedBots} />
        <BotCollection addToSelectedBots={this.addToSelectedBots} bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
