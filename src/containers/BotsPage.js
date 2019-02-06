import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";



class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    inArmy: false,
		army: []
  }


  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(res => this.setState({
      bots: res
    }))
  }

  

  

  render() {
    // console.log(army)
    return (
      <div>
        <YourBotArmy />
        <BotCollection bots={this.state.bots} />
        
       
       
      </div>
    );
  }

}

export default BotsPage;
