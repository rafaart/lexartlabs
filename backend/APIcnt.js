const cors = require('cors')
const express = require('express')
const axios = require('axios')
const app = express()

app.use(cors())

let category = 'iphone';

app.get('/:web/:categoria', async(req, res) => {

    
    console.log(req.params)
    const filter = req.params
    category = `${filter.web} + ${filter.categoria}`
    try {
    const {data} = await axios('https://api.mercadolibre.com/sites/MLB/search?q=' + category)
    return res.json(data)
    } catch (error) {
        console.error(error)
    }
})

app.listen('4567')