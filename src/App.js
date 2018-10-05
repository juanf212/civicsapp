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

  state= {

    initiatives:[]


  }

  componentDidMount = () => {
    this.setState({ screen: <Home    resultScreen={this.loadSearchResultScreen}   /> })
  }

  getInitiatives=()=>{
    
    return this.state.initiatives 

  }

  setInitiatives=(initiatives)=>{

    this.setState({initiatives}) 
  
  
  }

  loadHomeScreen = () => {
    this.setState({ screen: <Home    resultScreen={this.loadSearchResultScreen}/> })
  }

  loadSearchResultScreen = () => {

    this.setState({screen: <SearchResult initiativeScreen={this.loadInitiativeScreen}   getInitiatives={this.getInitiatives}  setInitiatives={this.setInitiatives}/> })

  }

  loadInitiativeScreen = (props) => {
    this.setState({ screen: <Initiative {...props} /> })
  }
  
  loadLoginScreen = () => {
    this.setState({ screen: <Login /> })
  }

  loadFavoriteScreen = () => {
    this.setState({ screen: <Favorite initiativeScreen={this.loadInitiativeScreen} /> })
  }

  render() {
    return (

      <View style={ {flex:1} }>
        <Button title='Home' onPress={this.loadHomeScreen} />
        <Button title='Favorite' onPress={this.loadFavoriteScreen} />
        <Button title='Login' onPress={this.loadLoginScreen} />
        {this.state.screen}
      </View>


    );
  }
}