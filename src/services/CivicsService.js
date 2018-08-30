const CivicsService = {
    iniciatives: (callback) => {
        let url = `http://civics.cc/api/initiatives`
        fetch(url)
            .then( request => request.json() )
            .then(data => {
                let proyectos = JSON.parse(data)
                callback(proyectos)
            })
    },

    cities: (callback) => {
        let url = `https://civics.cc/api/cities_with_initiatives`
        fetch(url)
            .then( request => request.json() )
            .then(data => {
                callback(data)
            })
    }

}

export default CivicsService;