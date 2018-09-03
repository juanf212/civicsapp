import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Initiative extends Component {

  render() {
    return (
      <View style={styles.container}>
      <Text>
                    Nombre: {this.props.name}
                </Text>
                <Text>
                    Ciudad: {this.props.city.name}
                </Text>
                <Text>
                    Distancia:{this.props.distance.toFixed(2)} Km
                </Text>
                <Text>
                    ____________________
                </Text>
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

});
