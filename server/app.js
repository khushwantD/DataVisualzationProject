require('dotenv').config()
require('express-async-errors')

const path = require('path')
const cors = require('cors')

const express = require('express')
const app = express()

const router = require('./routes/routes')

const connectDb = require('./db/connect')

// app.use(express.static(path.resolve(__dirname, './client/build')))
app.use(express.json())
app.use(cors())
app.use('/api/v1/data', router)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()