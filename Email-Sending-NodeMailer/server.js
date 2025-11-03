const express = require("express");
const emailRoutes  = require("./routes/email.routes")

const app = express();


app.use(express.json())

app.use("/Email" , emailRoutes)

app.use((req,res) => {
  res.send("request not found")
})


app.listen(2020 , () =>{
 console.log("server is on port 2020");
})