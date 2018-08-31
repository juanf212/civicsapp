import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import Home from './screens/Home';
import SearchResult from './screens/SearchResult';
import Initiative from './screens/Initiative';
import Favorite from './screens/Favorite';
import Login from './screens/Login';

export default class App extends Component {

  state= {}

  componentDidMount = () => {
    this.setState({ screen: <Home    resultScreen={this.loadSearchResultScreen}/> })
  }

  loadHomeScreen = () => {
    this.setState({ screen: <Home    resultScreen={this.loadSearchResultScreen}/> })
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
        <Button title='Home' onPress={this.loadHomeScreen} />
        <Button title='SearchResult' onPress={this.loadSearchResultScreen} />
        <Button title='Initiative' onPress={this.loadInitiativeScreen} />
        <Button title='Favorite' onPress={this.loadFavoriteScreen} />
        <Button title='Login' onPress={this.loadLoginScreen} />
        {this.state.screen}
      </View>


    );
  }
}