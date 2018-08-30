export default class GeolocationService {
    getCoords=(callback)=>{
            navigator.geolocation.getCurrentPosition(
                ({coords})=>{callback(coords)},
                ()=>{alert('No se pudo acceder a la localizacion')}
            )
        }
    
    }

    calculateDistance=(p1, p2) => {
        let R = 6378137; // Earth’s mean radius in meter
        let dLat = rad(p2.latitude - p1.latitude);
        let dLong = rad(p2.longitude - p1.longitude);
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(rad(p1.latitude)) * Math.cos(rad(p2.latitude)) *
          Math.sin(dLong / 2) * Math.sin(dLong / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c;
        return d; // returns the distance in meter
    }
