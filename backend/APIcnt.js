const cors = require('cors')
const express = require('express')
const axios = require('axios')
const app = express()

app.use(cors())

const category = 'Geladeira';

app.get('/', async(req, res) => {

    try {
    const {data} = await axios('https://api.mercadolibre.com/sites/MLB/search?q=' + category)
    return res.json(data)
    } catch (error) {
        console.error(error)
    }
})

app.listen('4567')