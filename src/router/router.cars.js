const router = require('express').Router()
const connection = require('./database.js')

router.get('/', async (request, response) => {
    let sql = 'SELECT * FROM cars'

    const result = await connection(sql)
    return response.json(result)

})

router.post('/',  (request, response) => {
    const cars = request.body
    const sql = 'INSERT INTO cars (mark, model , year, color, value) VALUES ( ?, ?, ?, ?, ?)'
    const params = [cars.mark, cars.model, cars.year, cars.color, cars.value]

     connection(sql, params)

    return response.json({
        message: 'cadastrado com sucesso',
    })
})

router.delete('/:id', async (request, response) => {
    
    const id = request.params.id

    let sql = 'DELETE from cars WHERE id = ?'

    await connection(sql, [id])

    return response.json({
        message: 'apagado com sucesso',
    })
})

router.put('/:id', async (request,response) => {
    const id = request.params.id
    const cars = request.body
    
    let sql = 'update cars set mark = ?, model = ?, year = ?, color = ?, value = ? where id = ?'
    let params = [cars.mark, cars.model, cars.year, cars.color, cars.value, id]

    await connection(sql, params)

    return response.json({
        message: 'atualizado com sucesso',
    })
})

module.exports = router