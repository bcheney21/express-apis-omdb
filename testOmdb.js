const axios = require('axios')
// configure environmental variables
require('dotenv').config()
const OMDB_API_KEY = process.env.OMDB_API_KEY
axios.get('http://www.omdbapi.com/?apikey=' + OMDB_API_KEY + '&s=star+wars')
.then(results => {
    console.log(results.data)
})
