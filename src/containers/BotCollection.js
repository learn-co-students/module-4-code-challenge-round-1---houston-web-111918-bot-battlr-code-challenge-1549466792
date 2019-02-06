import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  sendToBotArmy = botToArmy => {};

  render() {
    console.log(this.props.bot);
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bot}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
