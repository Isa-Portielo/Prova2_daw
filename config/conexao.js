
import mongoose from "mongoose";

const url = "mongodb+srv://isabellematielobg022_db_user:M918suByAZMcFSyb@cluster0.g0gljas.mongodb.net/?appName=Cluster0";

const conexao = await mongoose.connect(url)

export default conexao;