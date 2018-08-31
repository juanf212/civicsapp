import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import Home from './Home';
import SimpleInitiativeLayout from '../components/initiatives/SimpleInitiativeLayout';

export default class SearchResults extends Component {

    render() {
      return (
        <View style={styles.container}>
        <Text style={styles.welcome}>
          Resultados de Búsqueda
        </Text>
        <FlatList 
        data = {}
        renderItem = { ({item}) => <SimpleInitiativeLayout /> } />
        </View>
      );      
    }

} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
