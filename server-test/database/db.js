const mongoose = require("mongoose")

const defaultMongo = "mongodb://mongodb:27017/"
const mongoURI = 'mongodb://writeApp:writeApp9779@127.0.0.1:27017/writeapp';


const connectToDB = async () => {
    const connect = await mongoose.connect(defaultMongo, {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    console.log(`MongoDB connected: ${connect.connection.host}`)
    console.log("mongo url", process.env.MONGO_URI)
    
}

module.exports = connectToDB