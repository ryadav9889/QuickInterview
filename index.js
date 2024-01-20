const express = require("express")
const passport = require("passport")
const JWT = require("./configure/passport_jwt")
const server = express()
const db = require("./configure/mongoose")

// middleware for parsing
server.use(express.urlencoded())

//get method
// server.get("/",(req,res) => {
//     res.send ({
//         "message": "hii"
//     })
// })

server.use("/", require("./routes/index"))

server.listen(3000)
console.log("server is listening 8000")