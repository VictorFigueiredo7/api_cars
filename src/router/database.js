const sqlite = require('sqlite3')

var db = 'database.db'

const database = new sqlite.Database(db, (error) => {
    if (error) {
        console.log('erro ao criar o banco de dados');
    } else {
        let cars = `CREATE TABLE cars (id integer PRIMARY KEY, mark text, model text, year integer, color text, value integer)`
        database.run(cars, (error) => {
            if (error) {
                console.log('tabela cars já existe')
            }
        })

    }
})

const connection = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        database.all(sql, params, (error, rows) => {
            if (error) {
                reject(error)
            } else {
                resolve(rows)
            }
        })
    })
}

module.exports = connection