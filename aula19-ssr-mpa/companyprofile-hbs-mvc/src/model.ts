/**
 * File-based model
 */

import * as fs from "fs"
import { config } from "../conf/config"

type Model = UserProfile[] 

let model: Model = []

/**
 * Data model
 */
export class UserProfile {
    id: number
    name: string
    birthyear: number
    career: string
    bio: string

    constructor(id: number, name: string, birthyear: number, 
        career: string, bio: string) {

        this.id = id
        this.name = name;
        this.birthyear = birthyear;
        this.career = career;
        this.bio = bio;
    }
}

/**
 * DAO object
 * Implemented using a variation of the Singleton pattern
 */
export class UserProfileDAO {
    /**
     * Insert a new user profile
     * @param profile the user profile to insert
     */
    static insert(profile: UserProfile) {
        model.push(profile)
    }

    /**
     * List all user profiles
     * @returns an array of user profiles
     */
    static listAll(): UserProfile[] {
        return model
    }

    /**
     * Remove a profile given its id
     * @param id the id of the profile to remove
     * @returns the removed profile
     */
    static removeById(id: number): UserProfile {
        for (let i = 0; i < model.length; i++) {
            if (model[i].id == id) {
                const profile = model[i]

                model.splice(i, 1)

                return profile
            }
        }

        throw new Error("No element found with the given id")
    }

    /**
     * Update a user profile
     * @param profile the profile to be updated
     * @returns true if the profile could be updated, false otherwise
     */
    static update(profile: UserProfile): boolean {
        for (let i = 0; i < model.length; i++) {
            if (model[i].id == profile.id) {
                model[i] = profile

                return true
            }
        }

        return false
    }

    /**
     * Find a profile given its id
     * @param id the id of profile to find
     * @returns the found profile, if any
     */
    static findById(id: number) {
        for (const profile of model) {
            if (profile.id == id) {
                return profile
            }
        }
        throw new Error("Profile not found")
    }

    /**
     * Generate a new profile id
     * A new id is always bigger than the current max id
     * @returns a new id
     */
    static nextId() {
        if (model.length < 1) {
            return 1
        }

        return model.map(profile => profile.id).reduce((a, b) => Math.max(a, b)) + 1
    }
}

/**
 * Load model from the file system
 */
export function connect() {
    try {
        model = JSON.parse(fs.readFileSync(config["model-file"]).toString())
    } catch(error) {
        console.error("Failed to load model file")
        console.error((error as Error).stack)
    }
}

/**
 * Save model to the filesystem
 */
export function disconnect() {
    try {
        fs.writeFileSync(config["model-file"], JSON.stringify(model))
    } catch(error) {
        console.error("Failed to save model file")
        console.error((error as Error).stack)
    }
}


