import React, {Component} from 'react';
import {
    Stylesheet,
    Text,
    View
} from 'react-native';

export default class SimpleInitiativeLayout extends Component {

    render() {
        return(
            <View>
                <Text>
                    Nombre:
                </Text>
                <Text>
                    Ciudad:
                </Text>
                <Text>
                    Distancia:
                </Text>
                <Text>
                    ____________________
                </Text>
            </View>
        );

    }


}