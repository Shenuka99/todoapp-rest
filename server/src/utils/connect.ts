import mongoose from 'mongoose'
import config from 'config'
import logger from './logger'

export default async function connect(){
    console.log('inside')
    const dbUri = config.get<string>("dbUri")
    try {
        await mongoose.connect(dbUri)
        logger.info("DB connected")
    } catch (error) {
        logger.info('Could not connected to db')
        process.exit(1)
    }
}