import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import CivicsService from '../services/CivicsService';

import GeolocationService from '../services/GeolocationService';


export default class Home extends Component {
  rad = x => x * Math.PI / 180;
  
  calculate = (p1, p2) => {
    let R = 6378137; // Earth’s mean radius in meter
    let dLat = this.rad(p2.latitude - p1.latitude);
    let dLong = this.rad(p2.longitude - p1.longitude);
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.rad(p1.latitude)) * Math.cos(this.rad(p2.latitude)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    return d / 1000; // returns the distance in kilometers
}


  componentDidMount = () => {
    CivicsService.cities(cities => {
      CivicsService.iniciatives(iniciatives => {
        iniciativesWithCountries = iniciatives.map( iniciative => {
          iniciative.city = cities[iniciative.city]
          return iniciative;
        })

        let projectsInColombia = iniciativesWithCountries.filter( project => project.city.country=='Colombia' )
        

        let geolocation = new GeolocationService()
        geolocation.getCoords((diviceCoords)=>{
          alert('calculando distancias')
          console.log(diviceCoords)
          
          let projectsWithDistace = projectsInColombia.map( (project) => {
            let {coordinates} = JSON.parse(project.position)
            let [longitude, latitude] = coordinates;
            project.distance = this.calculate(diviceCoords, { latitude, longitude})
            
            return project
          })


          let closeProjects = projectsWithDistace.filter( project => project.distance < 5 )


          this.setState({
            projects:closeProjects
          })

        })

      })
    })
    

  }

  tap=() =>{
    this.props.resultScreen()
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Civics App!
        </Text>
        <Button title="Buscar" onPress={ this.tap}/>
            
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
