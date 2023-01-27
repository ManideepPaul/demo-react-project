// import { Component } from 'react';
import { useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([])

  console.log(searchField)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => setMonsters(user))
  }, [])


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }

  const filteredMonster = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField)
  })

  return (
    <div className="App" >
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='Search monsters'
        className='monster-search-box'
      />
      <CardList monsters={filteredMonster} />
    </div>
  )
}
/* class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
    // console.log('constructor')
  }

  componentDidMount() {
    // console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState(() => {
        return { monsters: user }
      }))
  }

  // This optimization will help up to not create the anonymous function on every re-render on the component. The onChange event will always refer to this function which was created on first time when function ran.(BY THIS WE CAN INCREASE THE PERFORMANCE ON THE APP A LITTLE BIT)
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  render() {

    // This optimization will help to make our code more readable
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    // console.log('App.js')

    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })
      ;
    return (
      <div className="App" >
        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder='Search monsters'
          className='monster-search-box'
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
} */

export default App;
