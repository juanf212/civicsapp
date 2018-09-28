import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  FlatList,
  Button,
  Alert
} from 'react-native';
import PlaceholderList from '../components/helpers/PlaceholderList'
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

  delete = (id) => {
    
    Alert.alert(
      'Alerta de confirmación',
      '¿Estás seguro que deseas eliminar la iniciativa de favoritos?',
      [
        {text: 'Ok', onPress: async () => {
          let favorites = this.state.favorites.filter( ({pk}) => pk!=id )
          
		      await AsyncStorage.setItem('favorites', JSON.stringify(favorites))
          
          this.setState({ favorites })
        }},
        {text: 'Cancelar', onPress: () => {} }
      ]
    )
	}

  favoriteLayout = ({item}) => {
    return (
    	<View>
        	<View>
        		<SimpleInitiativeLayout {...item} initiativeScreen={this.props.initiativeScreen}/>
        	</View>
        	<View>
				<Button color="#ff0000" onPress={ ()=>{ this.delete(item.pk) } } title="Eliminar" />
        	</View>
    	</View>
    )
  }
  
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
        Favoritos
      </Text>
      <FlatList 
        data = { this.state.favorites }
        keyExtractor = { (data, index) => index.toString() }
        renderItem = { this.favoriteLayout }
        ListEmptyComponent = { () => <PlaceholderList message="Aun no tienes favoritos" /> }
      />
      </View>
    );      
  }
}

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
