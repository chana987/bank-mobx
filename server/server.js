const express = require("express")
const path = require("path")
const app = express()
const api = require("./routes/api")
const port = process.env.SERVER_PORT || 4000
const bodyParser = require("body-parser")

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/bankDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'build')));
app.use("/", api)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Running server on port ${port}`))
