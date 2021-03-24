/**
 * Database layer
 */

import * as mongodb from "mongodb"
import { config } from "../conf/config"

/**
 * Database class.
 * Configuration parameters must stay in config.ts.
 * For performance reasons, we should create a single
 * instance of this class.
 */
export class Database {
    private client: mongodb.MongoClient

    /**
     * Creates a mongodb client.
     */
    constructor() {
        this.client = new mongodb.MongoClient(config.db.url, 
            {useUnifiedTopology: true})
    }

    /**
     * Open a connection to the database.
     */
    async connect() {
        try {
            if(!this.client.isConnected()) {
                await this.client.connect()
                console.log("Opened db connection")
            }
        } catch(error) {
            console.error("Failed to establish db connection")
            throw error
        }
    }

    /**
     * Close the database connection.
     */
    async disconnect() {
        try {
            if (this.client.isConnected()) {
                await this.client.close()
                console.log("Closed db connection")
            }
        } catch(error) {
            console.error("Failed to close db connection")
            throw error
        }
    }

    /**
     * Return the application database, as determined by config.ts.
     * @returns the application database
     */
    getDb() {
        try {
            if (this.client.isConnected()) {
                return this.client.db(config.db.name)
            }
            throw new Error("Database is not connected")
        } catch(error) {
            throw error
        }
    }
}