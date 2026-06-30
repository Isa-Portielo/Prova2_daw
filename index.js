import express from "express";
import Selecao from './models/Selecao.js';
import Jogador from './models/Jogador.js';

const app = express();
const PORT = 3013;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.set("views", "./views");
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.render("index");
});



app.listen(PORT, ()=>{
 console.log(
    `Servidor rodando em http://localhost:${PORT}`)
}); 

