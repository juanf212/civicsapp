export default class CivicsService {
    getNearbyProjects = (deviceCoords, range, callback) => {
        this.iniciativesWithCities(iniciatives => {
            let projectsWithDistance = iniciatives.map((project) => {
                let { coordinates } = JSON.parse(project.position)
                let [longitude, latitude] = coordinates;

                project.distance = this.calculate(deviceCoords, { latitude, longitude })

                return project
            })

            let nearbyProjects = projectsWithDistance
                .filter(project => project.distance < range)
                .sort((a, b) => a.distance - b.distance)

            callback(nearbyProjects)
        })
    }

    iniciativesWithCities = (callback) => {
        this.cities(cities => {
            this.iniciatives(iniciatives => {
                let iniciativesWithCities = iniciatives.map(iniciative => {
                    iniciative.city = cities[iniciative.city]
                    return iniciative;
                })

                callback(iniciativesWithCities)
            })
        })
    }

    iniciatives = (callback) => {
        let url = `http://civics.cc/api/initiatives`
        fetch(url)
            .then(request => request.json())
            .then(data => {
                let proyectos = JSON.parse(data)
                callback(proyectos)
            })
    }

    initiative = (id, callback) => {
        let url = `http://civics.cc/api/initiative?id=${id}`
        fetch(url)
            .then(request => request.json())
            .then(data => {
                callback(data)
            })
    }

    cities = (callback) => {
        let url = `https://civics.cc/api/cities_with_initiatives`
        fetch(url)
            .then(request => request.json())
            .then(data => {
                callback(data)
            })
    }

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
}