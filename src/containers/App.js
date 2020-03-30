import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ScrollBox from '../components/ScrollBox';
import './App.css';



class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      searchfield: '',
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({friends: users }))
  }

  onsearchChange = (event) =>{
    this.setState({searchfield: event.target.value})
  }

  render() {
    const {friends, searchfield} = this.state;
    const filteredfriends = friends.filter(friend =>{
      return friend.name.toLowerCase().includes(searchfield.toLocaleLowerCase())
    })
    return (
      <div>
        <h1 className= 'f1'>Cyber Friends</h1>
        <SearchBox searchListener = { this.onsearchChange }/>
        <ScrollBox>
            <CardList friends={ filteredfriends } />
        </ScrollBox>
        
      </div>
    );
  }
}

export default App;
