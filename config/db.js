const mongoose =require("mongoose");

const conectarDB = async()=>{
    try{
        const connection = await mongoose.connect(
            "mongodb+srv://analu:1951@cluster0.1se7mw6.mongodb.net/test",{
                useNewUrlParser:true,
                useUnifiedTopology: true,
            });
            const url = `${connection.connection.host}:${connection.connection.port}`;
            console.log(`MongoDB conectado en : ${url}`);
        }catch(error){
            console.log(`error:${error.message}`);
            process.exit(1);
            }
}
module.exports = conectarDB;