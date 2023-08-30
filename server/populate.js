require('dotenv').config()
const blackCofferData = require('./blackCofferData.json')
const Data = require('./models/model')
const connectDB = require('./db/connect')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Data.create(blackCofferData)
        console.log('Success!!!');
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start()