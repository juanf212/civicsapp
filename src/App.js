import React, { Component } from 'react';
import {
  View,
  Button
} from 'react-native';
import Home from './screens/Home';
import SearchResult from './screens/SearchResult';
import Initiative from './screens/Initiative';
import Favorite from './screens/Favorite';
import Login from './screens/Login';

export default class App extends Component {

  state= {
    screen: <Home />
  }

  loadHomeScreen = () => {
    this.setState({ screen:true })
  }

  loadSearchResultScreen = () => {

    this.setState({screen: <SearchResult /> })

  }

  loadInitiativeScreen = () => {
    this.setState({ screen: <Initiative /> })
  }
  
  loadLoginScreen = () => {
    this.setState({ screen: <Login /> })
  }

  loadFavoriteScreen = () => {
    this.setState({ screen: <Favorite /> })
  }

  render() {
    return (

      <View style={ {flex:1} }>
        <Button title="Home" />
        <Button title="SearchResult" />
        <Button title="Initiative" />
        <Button title="Favorite" />
        <Button title="Login" />
        {this.state.screen}
      </View>


    );
  }
}