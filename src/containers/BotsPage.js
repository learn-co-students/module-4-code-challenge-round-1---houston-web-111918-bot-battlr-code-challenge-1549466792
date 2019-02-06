import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

let updateElementInArray = (array, id, values) => {
  return array.map( (element) => {
    if(element.id == id){
      return { ...element, ...values }
    } else {
      return element
    }
  })
}

class BotsPage extends React.Component {
  state = {
		bots: [],
	}

  enlistBot = (id) => {
    this.setState({
      bots: updateElementInArray(this.state.bots, id, {enlisted: true})
    })
  }

  delistBot = (id) => {
    this.setState({
      bots: updateElementInArray(this.state.bots, id, {enlisted: false})
    })
  }


	fetchData = () => {
		fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
			.then(res => res.json())
			.then(bots => this.setState({bots}))
	}
	componentDidMount(){
		this.fetchData()
	}

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.bots.filter(bot => bot.enlisted ==true)} delistBot={this.delistBot}/>
        <BotCollection bots={this.state.bots} enlistBot={this.enlistBot}/>
      </div>
    );
  }

}

export default BotsPage;
