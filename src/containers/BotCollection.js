import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'
class BotCollection extends React.Component {
	
	state={
		detailed: false,
		selectedBot: {}
	}

	clickBot = (bot) =>{
		this.setState({
			detailed: !this.state.detailed,
			selectedBot: bot
		})
	}

  render(){
		if(this.state.detailed == false){
			return (
				<div className="ui four column grid">
					<div className="row">
						{this.props.bots.map(bot => 
							<BotCard bot={bot} key={bot.id} clickBot={this.clickBot}/>
							)}
						Collection of all bots
					</div>
				</div>
			);
		}
  else{
		return(
			<BotSpecs bot={this.state.selectedBot} key={this.state.selectedBot.id} clickBot={this.clickBot} enlistBot={this.props.enlistBot}/>
		)

	}
  }

};

export default BotCollection;
