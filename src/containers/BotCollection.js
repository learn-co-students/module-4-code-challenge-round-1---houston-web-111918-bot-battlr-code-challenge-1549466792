import React from "react";
import BotCard from "../components/BotCard";




class BotCollection extends React.Component {
  //your code here

	state = {
		inArmy: false,
		army: []
	}
	
	handleClick = (bot) => {
		this.setState({
			inArmy: true,
			army: [...this.state.army, bot]
		})
	}

  render(){
		console.log(this.state.army)
  	return (
			
  	  <div className="ui four column grid">
    		<div className="row">
				{this.props.bots.map( bot => (
          <BotCard key={bot.id} bot={bot} handleClick={this.handleClick}/>
        ))}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
