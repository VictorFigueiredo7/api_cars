const express = require('express')
const routerCars = require('./router/router.cars')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/cars', routerCars)

app.listen(3000)