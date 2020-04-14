import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ScrollBox from '../components/ScrollBox';
import './App.css';

import { setSearchField, requestFriends } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    searchField: state.searchFriends.searchField,
    friends: state.requestFriends.friends,
    isPending: state.requestFriends.isPending,
    error: state.requestFriends.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onsearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onrequestFriends: () => dispatch(requestFriends()),
  }
}


class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     friends: [],
  //     // searchfield: '',
  //   }
  // }
  componentDidMount() {
    this.props.onrequestFriends();
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(users => this.setState({friends: users }))
  }

  // onsearchChange = (event) =>{
  //   this.setState({searchfield: event.target.value})
  // }

  render() {
    // const { friends } = this.state;
    const { searchField, onsearchChange, friends, isPending } = this.props;
    const filteredfriends = friends.filter(friend =>{
      return friend.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    })
    return isPending ?
    <h1>Loading</h1>: 
    (
      <div>
        <SearchBox  searchListener = { onsearchChange }/>
        <ScrollBox>
            <CardList friends={ filteredfriends } />
        </ScrollBox>
        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
