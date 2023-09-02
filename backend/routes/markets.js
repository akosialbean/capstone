const { Router } = require('express')
const router = Router()

const supermarkets = [
    {
        id: 1,
        store: 'Whole Foods',
        miles: 3
    },
    {
        id: 2,
        store: 'Trader Joes',
        miles: 6
    },
    {
        id: 3,
        store: 'Alvins',
        miles: 9
    }
]

router.get('/', (req, res) => {
    const {miles} = req.query
    const parseMiles = parseInt(miles)
    if(!isNaN(parseMiles)){
        const filterStores = supermarkets.filter((s) => s.miles <= parseMiles)
        res.send(filterStores)
    }else{
        res.send(miles)
    }
})

module.exports = router