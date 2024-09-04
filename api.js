const express = require('express');
const porta = 3000;
const url = 'http://localhost:3000/';
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');




//conectar com o banco de dados 
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'academia'
})

const create = (req, res) => {
    let dadosNome= req.body.dadosNome
    let dadosRG = req.body.dadosRG;
    let dadosCPf = req.body.dadosCPf;
    let dadosTelefone = req.body.dadosTelefone;
    let dadosEndereco = req.body.dadosEndereco;
    let dadosformadePagamento = req.body.dadosformadePagamento;

    let query = `INSERT INTO cadastrar(dadosNome, dadosRG, dadosCPF, dadosTelefone, dadosEndereco, dadosfomardepagamento) VALUE`;
    query += `('${dadosNome}','${dadosRG}','${dadosCPf}','${dadosTelefone}','${dadosEndereco}','${dadosformadePagamento}');`;

    con.query(query, (err, result) => {
        if (err) {
            res.redirect("http://127.0.0.1:5500/index.html");
        } else {
            res.redirect("http://127.0.0.1:5500/index.html");
        }
    });


}

const read = (req, res) => {
    con.query("SELECT * FROM cadastrar", (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.json(result)
        }
    })
}



//esse teste, ira aparecer na pagina web
const teste = (req, res) => {
    res.send("Api respondendo");
}

//configuração da saida para o front-end
//para o teste funcionar
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))


//rotas de saida
app.get("/", teste);
app.post("/cadastrar", create);
app.get("/cadastrar", read);

//teste no console 
app.listen(3000, () => {
    console.log("Servidor respondendo na porta: ", porta);
})