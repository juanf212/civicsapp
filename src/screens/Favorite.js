import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  FlatList,
} from 'react-native';

import SimpleInitiativeLayout from '../components/initiatives/SimpleInitiativeLayout';

export default class Favorite extends Component {
  state = {
    favorites: []
  }

  componentDidMount = async () => {
    let favorites = await AsyncStorage.getItem('favorites');
    favorites = JSON.parse(favorites)
  
    this.setState({ favorites })
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
        Favoritos
      </Text>
      <FlatList 
        data = { this.state.favorites }
        extraData = { (data, index) => index.toString() }
        renderItem = { ({item}) => <SimpleInitiativeLayout {...item} initiativeScreen={this.props.initiativeScreen}/> }
      />
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
