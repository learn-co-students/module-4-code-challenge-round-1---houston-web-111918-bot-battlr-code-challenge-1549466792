import React from "react";
import BotCollection from "../containers/BotCollection"
import YourBotArmy from "../containers/YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(){
    super()
    this.state = {
      bots: [],
      switch: false
    }
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(bots => this.setState({
        bots: bots
      
      }))
  }

  switchSides = (selectedBot)=> {
    this.setState ({
      bots: this.state.bots.map(bot =>{
        if (bot.id == selectedBot.id){
          return{...bot, switch: !selectedBot.switch}
        }else{
          return bot
        }
      })
    })
  }

  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots}/>
        <YourBotArmy switch={this.switchSides}/>
      </div>
    );
  }

}

export default BotsPage;
