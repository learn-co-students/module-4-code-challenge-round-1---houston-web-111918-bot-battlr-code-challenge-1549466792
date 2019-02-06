import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";
 
class BotsPage extends React.Component {
  
  state = {
    allBots: [],
    enlistedBots: [
      
      {id: 102, name: "RyM-66", health: 86}
    ]
  }

  componentDidMount = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(json => this.setState({
      allBots: json
    }))
  }




  onSelectEnlisted = (bot) => {
    // let enlistedBots = [...this.state.enlistedBots]

    let enlist = this.state.enlistedBots.map(  (eBot) => {
      if (eBot.id !== bot.id) {
        console.log(eBot, bot)
        return {eBot, bot}
      }
      else {
        console.log(eBot)
        return {eBot}
      }
    })

    // this.setState({
    //   enlistedBots: enlist
    // })
   


  }
      

  
 
   

 

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.enlistedBots}/>
        <BotCollection bots={this.state.allBots} selected={this.onSelectEnlisted}/>
      </div>
    );
  }

}

export default BotsPage;
