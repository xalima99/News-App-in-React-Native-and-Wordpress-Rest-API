const axios = require('axios')

export default axios.create({
    baseURL: 'https://senegaldirect.com/wp-json/wp/v2'
})