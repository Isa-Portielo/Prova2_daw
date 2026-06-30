import conexao from "../config/conexao.js";

 const FornecedorSchema = new conexao.Schema({
    nome: String,
    telefone: String
 })

 const Fornecedor = conexao.model("Fornecedor", FornecedorSchema);
 export default Fornecedor; 