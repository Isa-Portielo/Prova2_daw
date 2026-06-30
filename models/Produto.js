import conexao from "../config/conexao.js";

const ProdutoSchema = new conexao.Schema({
 nome: String,
 marca: String,
 preco: Number,
 quantidadeEstoque: Number,
 garantia: String

})

const Produto = conexao.model("Produto", ProdutoSchema);
export default Produto;