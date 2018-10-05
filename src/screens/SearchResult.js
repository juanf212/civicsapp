import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import Home from './Home';
import SimpleInitiativeLayout from '../components/initiatives/SimpleInitiativeLayout';

import CivicsService from '../services/CivicsService';
import GeolocationService from '../services/GeolocationService';

export default class SearchResults extends Component {
  state = {
    projects: []
  }

  componentDidMount = () => {
    const geolocation = new GeolocationService()

    if (this.props.getInitiatives().length) {
     
      return this.setState({ projects: this.props.getInitiatives() })
      
    }

    geolocation.getCoords((diviceCoords) => {
      const civic = new CivicsService()

      civic.getNearbyProjects(diviceCoords, 5, (projects) => {
        this.setState({ projects })
        this.props.setInitiatives(projects)

      })
    })



  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Resultados de Búsqueda</Text>
        <FlatList
          data={this.state.projects}
          renderItem={({ item }) => <SimpleInitiativeLayout {...item} initiativeScreen={this.props.initiativeScreen} />}
          keyExtractor={(item, index) => index.toString()} 
          ListEmptyComponent = { () => <ActivityIndicator size="large" color="#0000ff" /> }  
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
