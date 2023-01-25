import { Component } from "react";

class CardList extends Component {
  render() {
    // console.log('render from CardList');
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster, index) => (
          <h1 key={index}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
