import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js'

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n ConnectedDB: ${connectionInstance.connection.host}`)
        // study connectionInstance output
    } catch (error){
        console.log("Err: ", error)
        process.exit(1)
        // study processs exit codes
    }
}

export default connectDB