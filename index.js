import express from "express";
import Produto from './models/Produto.js';
import Fornecedor from './models/Fornecedor.js';

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

app.get("/produto/lst", async (req, res) => {
  const  produtos = await Produto.find();
  res.render("produto/lst", { produtos });
});
app.get("/produto/add", (req, res) => {
  res.render("produto/add");
});
app.post('/produto/add', async (req, res) => {
  const {nome, marca, preco, quantidadeEstoque, garantia} = req.body;
  await Produto.create({ nome, marca, preco, quantidadeEstoque, garantia });
  res.render("produto/addok");
});
app.post('/produto/lst', async (req, res) => {
  const { pesquisar } = req.body;
  const produtos = await Produto.find({
    nome: new RegExp(`^${pesquisar}`, 'i')
  });
  res.render("produto/lst", { produtos });
});
app.get('/produto/del/:id', async (req, res) => {
const produto = await Produto.findByIdAndDelete(req.params.id)
res.redirect("/produto/lst")
});
app.get('/produto/edt/:id', async (req, res) => {
const produto = await Produto.findById(req.params.id)
res.render("produto/edt", {produto})
});
app.post('/produto/edt/:id', async (req, res) => {
const produto = await Produto.findByIdAndUpdate(req.params.id, req.body)
res.render("produto/edtok")
});


app.get("/fornecedor/lst", async (req, res) => {
  const  fornecedores = await Fornecedor.find();
  res.render("fornecedor/lst", { fornecedores });
});

app.get("/fornecedor/add", (req, res) => {
  res.render("fornecedor/add");
});
app.post('/fornecedor/add', async (req, res) => {
  const {nome, telefone} = req.body;
  await Fornecedor.create({ nome, telefone});
  res.render("fornecedor/addok");
});


app.post('/fornecedor/lst', async (req, res) => {
  const { pesquisar } = req.body;
  const fornecedores = await Fornecedor.find({
    nome: new RegExp(`^${pesquisar}`, 'i')
  });
  res.render("fornecedor/lst", { fornecedores });
});


app.get('/fornecedor/del/:id', async (req, res) => {
const fornecedor = await Fornecedor.findByIdAndDelete(req.params.id)
res.redirect("/fornecedor/lst")
});

app.get('/fornecedor/edt/:id', async (req, res) => {
const fornecedor = await Fornecedor.findById(req.params.id)
res.render("fornecedor/edt", {fornecedor})
});
app.post('/fornecedor/edt/:id', async (req, res) => {
const fornecedor = await Fornecedor.findByIdAndUpdate(req.params.id, req.body)
res.render("fornecedor/edtok")
});

app.listen(PORT, ()=>{
 console.log(
    `Servidor rodando em http://localhost:${PORT}`)
}); 

