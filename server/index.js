const express = require ("express");
const cors = require("cors")
const app = express();
const mongoose = require("mongoose")
const authRoutes = require("./Routes/AuthRoutes")
const cookieParser = require("cookie-parser")

app.listen(4000, ()=> {
    console.log("Server started on port 4000.")
})



mongoose.connect("mongodb+srv://fehmigunay:fehmigunay14@cluster0.zqg217o.mongodb.net/senior-db", {
    useUnifiedTopology: true
})
.then (()=> {
    console.log("DB Connection Successfull");
})
.catch((err) => {
    console.log(err.message)
});


app.use(cors({
origin:["http://localhost:3000"],
method: ["GET" , "POST"],
credentials: true,

}))



app.use (cookieParser())
app.use(express.json())
app.use("/" , authRoutes)


