const express = require("express")
const path = require("path")
const app = express()
const api = require("./routes/api")
const port = process.env.SERVER_PORT || 4000
const bodyParser = require("body-parser")

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bankDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
})

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'build')));
app.use("/", api)

app.listen(port, () => console.log(`Running server on port ${port}`))
