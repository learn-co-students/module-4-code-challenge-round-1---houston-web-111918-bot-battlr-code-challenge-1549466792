import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs.js'
 
class BotCollection extends React.Component {
	
	state = {
		showDetail: false,  // if true, show all bots; if false, show one/detail
		selectedBot: {}
	}
	
	
	toggleDetail = (bot) => {
			this.setState({
				showDetail: !this.state.showDetail,
				selectedBot: bot
	})
  }

  render(){

		if (this.state.showDetail) {
			return ( 
				<div>	
					<BotSpecs bot={this.state.selectedBot} onEnlist={this.props.onEnlist} toggleDetail={this.toggleDetail}/>
				</div>
				)
		} else {
			return (
				<div className="ui four column grid">
					<div className="row">
					 {this.props.bots.map( (bot) =>
						//  <BotCard key={bot.id} bot={bot} toggle={this.props.onEnlist} />
						 <BotCard key={bot.id} bot={bot} toggle={this.toggleDetail} />
					 )}
					</div>
				</div>
			);
		}
		
  }

};

export default BotCollection;
