/**
 * Singleton for database connection
 */
import * as mongodb from "mongodb"
import {config} from "../../conf/config"
import session from "express-session"
import ConnectMongoDBSession from "connect-mongodb-session"

/**
 * Configure session storage
 */
const Store = ConnectMongoDBSession(session)
export const sessionStore = new Store({
    uri: config.db.url,
    databaseName: config.db.name,
    collection: config.db.collections.sessions
})

/**
 * Instantiate the singleton MongoDB client
 */
const client = new mongodb.MongoClient(config.db.url, 
    {useUnifiedTopology: true})

/**
 * Connect to the database
 */
export async function connect() {
    try {
        await client.connect()
        console.log("Connected to the database")
    } catch (error) {
        console.error("Failed to connect to the database")
        throw error
    }
}

/**
 * Disconnect from the database
 */
export async function disconnect() {
    try {
        if (client.isConnected()) {
            await client.close()
            console.log("Closed database connection")
        }
    } catch (error) {
        console.error("Failed to close database connection")
        throw error
    }
}

/**
 * Retrieves the singleton database instance
 * @returns the database
 */
export function getDb() {
    return client.db(config.db.name)
}