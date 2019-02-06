import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {

  state = {
    bots: [],
    show: null
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

  show = (bot) => {
    console.log('showbot', bot)
    this.setState({
      show: bot
    })
  }

  hide = () => {
    this.setState({
      show: null
    })
  }


  render() {

    let div
    if(this.state.show) {
      div = <BotSpecs bot={this.state.show} hide={this.hide} addToSelectedBots={this.addToSelectedBots} />
    } else {
      div = <BotCollection show={this.show} addToSelectedBots={this.addToSelectedBots} bots={this.state.bots} />
    }

    return (
      <div>
        <YourBotArmy removeFromSelectedBots={this.removeFromSelectedBots} bots={this.state.bots.filter(bot => bot.selected === true)}/>
        {div}
      </div>
    );
  }

}

export default BotsPage;
