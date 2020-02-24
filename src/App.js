import React, { Component } from 'react';
import './App.css';
import { CardList } from './componenets/cards-list/card-list.component';
import { Searchbox } from './componenets/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
      this.state = {
      monsters: [],
      searchField:''
      };
   // this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users=>this.setState({ monsters: users }))
  };

  handleChange = (e) => {
    this.setState({searchField:e.target.value})
  };

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return(  
        <div className="App">
          <h1>Muhahahaha</h1>
          <Searchbox 
            placeholder='Search for a monster'
            handleChange ={this.handleChange}
          />
          <CardList monsters={filteredMonsters}/>
        </div>
    );
  }
}
export default App;
