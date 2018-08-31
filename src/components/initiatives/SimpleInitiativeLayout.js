import React, {Component} from 'react';
import {
    Stylesheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export default class SimpleInitiativeLayout extends Component {

    render() {
        return(
            <TouchableHighlight>
            <View>
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
            </TouchableHighlight>
        );

    }


}