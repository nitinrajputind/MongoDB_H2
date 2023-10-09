const express = require("express");
const client = require("./db/config");
const route  = require("./routes/route");
require("dotenv").config()

const PORT = process.env.PORT


const app = express();
app.use(express.json());


// Database Connection 
async function dbconnect(){
    try{
        await client.connect()
        console.log("Connect to Database")
    }
    catch(a){
        console.log("DB is Throw Error " + a)
    }
}
dbconnect();


// rest api 
app.use("/api", route)




app.listen(PORT,()=>{
    console.log(`Server is Runing on http://localhost:${PORT}`);
})