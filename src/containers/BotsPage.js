import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one



  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy bots={this.props.bots} />
        <BotCollection bots={this.props.bots} />

      </div>
    );
  }

}

export default BotsPage;
