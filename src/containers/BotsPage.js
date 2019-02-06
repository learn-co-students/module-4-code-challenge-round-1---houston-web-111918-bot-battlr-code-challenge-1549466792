import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = {
    bots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => {
      this.setState({bots})
    })
  }

  addToSelectedBots = (bot) => {
    this.setState({
      bots: this.state.bots.map(thisbot => {
        if(bot.id === thisbot.id) {
          thisbot.selected = true
          return thisbot
        }
        return thisbot
      })
    })
  }


  removeFromSelectedBots = (bot) => {
    this.setState({
      bots: this.state.bots.map(thisbot => {
        if(bot.id === thisbot.id) {
          thisbot.selected = false
          return thisbot
        }
        return thisbot
      })
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy removeFromSelectedBots={this.removeFromSelectedBots} bots={this.state.bots.filter(bot => bot.selected === true)}/>
        <BotCollection addToSelectedBots={this.addToSelectedBots} bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
