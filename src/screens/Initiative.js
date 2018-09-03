import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Button
} from 'react-native';

export default class Initiative extends Component {
  markLike = async () => {
    let value = await AsyncStorage.getItem('favorites');
    
    if (!value) {
      value = "[]"
    }
    value = JSON.parse(value)
    value.push(this.props)

    await AsyncStorage.setItem('favorites', JSON.stringify(value));
  }

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
                <Button title="Save" onPress={this.markLike}  />
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
