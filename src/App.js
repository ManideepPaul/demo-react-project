import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState(() => {
      return {monsters: user}
    },
    () => {
      console.log(this.state)
    }))
  }
  render() {
    console.log('render')
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(e) => {
          const filteredMonster = this.state.monsters.filter((monster) => monster.name.includes(e.target.value)) ;
          this.setState({monsters: filteredMonster})
        }}/>
        {this.state.monsters.map((monster, index) => <h1 key={index}>{monster.name}</h1>)}
      </div>
    );
  }
}

export default App;
