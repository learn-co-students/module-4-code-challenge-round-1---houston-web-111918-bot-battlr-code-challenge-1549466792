
import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";
 
class BotsPage extends React.Component {
  
  state = {
    allBots: []
  }

  componentDidMount = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(json => this.setState({
      allBots: json
    }))
  }


  updateElementsInArray = (array, id, values) => {
    return array.map( element => {
      if (element.id === id) {
        return { ...element, ...values }
      } else {
        return element
      }
  })
  }

  onEnlist = (bot) => {
    
    let newState = this.updateElementsInArray(this.state.allBots, bot.id, {enlisted: true})
    this.setState({
      allBots: newState 
    })
  }

  onDelist = (bot) => {
    let newState = this.updateElementsInArray(this.state.allBots, bot.id, {enlisted: false})
    this.setState({
      allBots: newState 
    })
  }

 

  render() {
    let enlisted = this.state.allBots.filter( (bot) => (bot.enlisted === true) )

    return (
      <div>
        <YourBotArmy bots={enlisted} onDelist={this.onDelist} />
        <BotCollection bots={this.state.allBots} onEnlist={this.onEnlist}/>
      </div>
    );
  }

}

export default BotsPage;

// onSelectEnlisted = (bot) => {

  //   let enlistedBots = [...this.state.enlistedBots]
  //   let enlist = []
    
  //   enlist = this.state.enlistedBots.map(  (eBot) => {
  //     // console.log(eBot.id !== bot.id)
  //     if (eBot.id !== bot.id) {
  //       enlistedBots.push({...bot})
  //     }
      
  //    return enlistedBots
  //   })

  //   console.log(enlistedBots)
  //   // console.log(enlisted)
   
 
  //   this.setState({
  //     enlistedBots: [enlistedBots]
  //   })

  //   // console.log(this.state.enlistedBots)
   
	// }