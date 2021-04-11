/**
 * Model for the "Admin" entity
 */

import * as dbConnection from "./db-connection"
import {config} from "../../conf/config"

/**
 * Admin entity
 */
export class Admin {
    id: number
    email: string
    name: string
    password: string

    constructor(email: string, password: string) {
        this.id = 0
        this.email = email
        this.name = ""
        this.password = password
    }

    isValid() {
        return this.email.length > 0 && this.password.length > 0
    }
}

/**
 * Admin DAO
 * Implemented as Singleton (https://refactoring.guru/design-patterns/singleton)
 */
export class AdminDAO {
    private static instance: AdminDAO

    private constructor() {}

    /**
     * Retrieves the singleton instance
     * @returns the singleton instance
     */
    static getInstance() {
        if (!this.instance) {
            this.instance = new AdminDAO()
        }
        return this.instance
    }
    
    /**
     * Get the main collection
     * @returns the main collection
     */
    private getCollection() {
        return dbConnection.getDb().collection(config.db.collections.admins)
    }

    /**
     * Retrieves an admin instance given its email
     * @param email the admin email
     * @returns the admin instance
     */
    async findByEmail(email: string) {
        try {
            const response = await this.getCollection().findOne({email: email})

            if (response) {
                return response as Admin
            }
            throw Error("Failed to retrieve admin with given email")
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}