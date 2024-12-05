import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";



class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    army: []
  }

  handleClick = (selectedBot) => {
		this.setState({
      army: [selectedBot, ...this.state.army],
      bots: this.state.bots.filter( bot => bot != selectedBot)
		})
  }
  
  onClick = (selectedBot) => {
    this.setState({
      bots: [selectedBot, ...this.state.bots],
      army: this.state.army.filter( bot => bot != selectedBot)
    })
  }
    
  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(res => this.setState({
      bots: res
    }))
  }

  render() {
    console.log(this.state.army)
    return (
      <div>

        <YourBotArmy bots={this.state.army} handleClick={this.onClick}/>
        <BotCollection bots={this.state.bots} handleClick={this.handleClick}/>
      </div>
    );
  }

}

export default BotsPage;
