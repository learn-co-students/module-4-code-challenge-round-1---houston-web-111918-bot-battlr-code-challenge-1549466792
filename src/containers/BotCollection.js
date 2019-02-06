import React from "react";
import BotCard from "../components/BotCard";
 
class BotCollection extends React.Component {
	
	
	


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				 {this.props.bots.map( (bot) =>
					 <BotCard key={bot.id} bot={bot} selected={this.props.selected} />
				 )}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
