let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
let bodyParser = require('body-parser')
let dbConfig = require('./database/db')
let path = require('path')

// Express Route

const employeeRoute = require('./routes/employee.route')

// Connecting Mongodb

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
    console.log("connect dai laew sus")
},
    error => {
        console.log("error laew i sus:" + error)
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: true
    }
))

app.use(cors());
app.use('/employee', employeeRoute);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../build')))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../build/index.html"))
    })
}

//Port

const port = process.env.PORT || 4000
const server = app.listen(port, () => {
    console.log('connect to port' + port)
})

//404

app.use((req, res, next) => {
    next(createError(404))
}

)

app.use(
    function (err, req, res, next) {
        console.error(err.message)
        if (!err.statusCode) err.statusCode = 500;
        res.status(err.statusCode).send(err.message)

    }
)

