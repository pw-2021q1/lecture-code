import * as mongodb from "mongodb"
import {config} from "../conf/config"

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

export function getDb() {
    return client.db(config.db.name)
}