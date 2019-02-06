import React from "react";
import BotsCollection from "./BotCollection";
import BotCard from "../components/BotCard";
import YourbotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: []
  };

  componentDidMount = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(json =>
        this.setState({
          bots: json
        })
      );
  };

  // componentDidUpate = () => {
  //   fetch("https://bot-battler-api.herokuapp.com/api/v1/bots");
  //   method: PUT;
  // };

  render() {
    return (
      <div>
        {this.state.bots.map(bot => {
          return <BotCard allBots={bot.id} bot={bot} />;
        })}
        />
      </div>
    );
  }
}

export default BotsPage;
