const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

require('dotenv').config()

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.MYSQL_PORT
});

//verify it is connected in DB
//ATENCAO: SE VC QUER AUTENTICAR E DER ERRO: Client does not support authentication protocol requested by server; consider upgrading MySQL client
//SEGUE LINK PARA CORRIGIR: https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server?answertab=trending#tab-top
db.getConnection((err, connection) => {
    if (err) throw (err)
    console.log("DB connected successful: " + connection.threadId)
})

app.use(express.json())
app.use(cors())

// app.use('/', (req, res) => {
//    res.send('Hello World')
// })

app.get('/products', (req, res) => {
    // const{ name } = req.body
    // const { type } = req.body
    // const { qtd } = req.body
    // const { price } = req.body

    let SQL = "SELECT * FROM shop"

    db.query(SQL, (err, result) => {
        if (err) {
            console.log('Erro ao listar os produtos')
            console.log(err)
        } else {
            // console.log(result)
            res.send(result)
        }
    })
})

app.get('/products/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const { type } = req.body
    const { qtd } = req.body
    const { price } = req.body

    // let SQL = "SELECT pdt_name, pdt_type, pdt_qtd, pdt_price FROM shop WHERE id =?"
    let SQL = "SELECT * FROM shop WHERE id =?"

    db.query(SQL, [id], (err, result) => {
        if (err) {
            console.log('Erro ao localizar o produto')
            console.log(err)
        } else {
            // console.log(result)
            res.send(result)
        }
    })
})

app.post('/register', async(req, res) => {
    const { name } = req.body
    const { type } = req.body
    const { qtd } = req.body
    const { price } = req.body

    console.log("GAY ", name, type, qtd, price);

    //let SQL = "INSERT INTO shop (pdt_name, pdt_type, pdt_qtd, pdt_price) VALUES (?, ?, ?, ?)"

    let SQL = `INSERT INTO shop (pdt_name, pdt_type, pdt_qtd, pdt_price) VALUES (${name}, ${type}, ${qtd}, ${price})`;

    db.query(SQL, (err, result) => {
        if (err) {
            console.log({ msg: 'Erro ao cadastrar o produto' });
            console.log(err);
        } else {
            res.send({ msg: 'Produto Cadastrado com Sucesso', result });
        }
    })
    console.log(`Produto Registrado: Nome: ${name}, Tipo: ${type}, Quantidade: ${qtd}, Preço: ${price}`)
})

app.put('/edit/:id', (req, res) => {
    const { name } = req.body
    const { type } = req.body
    const { qtd } = req.body
    const { price } = req.body
    const { id } = req.params

    // console.log('ID no Back', id)
    console.log(id, name, type, qtd, price)

    let SQL = "UPDATE shop SET pdt_name = ?, pdt_type = ?, pdt_qtd = ?, pdt_price = ? WHERE id = ?"

    db.query(SQL, [name, type, qtd, price, id], (err, result) => {

        if (err) {
            console.log({ msg: 'Erro ao Editar o produto' })
            console.log(err)
        } else {
            res.send({ msg: 'Produto Atualizado com Sucesso', result })
        }
    })

    console.log(`Produto Editado: Nome: ${name}, Tipo: ${type}, Quantidade: ${qtd}, Preço: ${price}`)
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params

    let SQL = "DELETE FROM shop WHERE id = ?"

    db.query(SQL, id, (err, result) => {
        if (err) {
            console.log({ msg: 'Erro ao deletar o produto' })
            console.log(err)
        } else {
            res.send({ msg: 'Produto Deletado com Sucesso', result })
        }
    })

    console.log(`Produto Deletado de ID: ${id}`)
})

app.listen(3001, console.log('Backend Running in Port 3001'));