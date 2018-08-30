import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Home from './screens/Home';

export default class App extends Component {
  render() {
    return (
      <View style={ {flex:1} }>
        <Home />
      </View>
    );
  }
}