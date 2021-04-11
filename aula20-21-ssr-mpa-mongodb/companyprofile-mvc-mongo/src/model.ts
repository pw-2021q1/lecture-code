import * as fs from "fs"
import {config} from "../conf/config"
import * as dbConnect from "./db-connection"


/**
 * Data model
 */
export class UserProfile {
    id: number
    name: string
    birthyear: number
    career: string
    bio: string
    picture: string

    constructor(name: string, birthyear: number, 
        career: string, bio: string) {
            this.id = 0
            this.name = name
            this.birthyear = birthyear
            this.career = career
            this.bio = bio
            this.picture = ""
        }
    
    isValid(): boolean {
        return this.name.length > 0 && this.birthyear > 0
            && this.career.length > 0 && this.bio.length > 0
    }
}

/**
 * DAO object
 */
 export class UserProfileDAO {
     private static instance: UserProfileDAO

     private constructor() {}

     private getCollection() {
         return dbConnect.getDb().collection(config.db.collections.profiles)
     }

     static getInstance(): UserProfileDAO {
         if (!UserProfileDAO.instance) {
             UserProfileDAO.instance = new UserProfileDAO()
         }

         return UserProfileDAO.instance
     }

     /**
      * Insert a new profile
      * @param profile the profile
      */
     async insert(profile: UserProfile): Promise<boolean> {
        try {
            const newId = await this.nextId()

            profile.id = newId

            const response = await this.getCollection().insertOne(profile)

            return (response) ? response.insertedCount > 0 : false
        } catch (error) {
            throw Error("Failed to insert new element")
        }
     }

     /**
      * List all profiles
      */
     async listAll(): Promise<UserProfile[]> {
         try {
             return await this.getCollection().find(
                 {}, 
                 {projection: {_id: 0}}).toArray() || []
         } catch (error) {
             console.error("Failed to list elements")
             throw error
         }
     }

     /**
      * Find by profile using its id
      * @param id the profile id
      */
     async findById(id: number): Promise<UserProfile> {
         try {
             const response = await this.getCollection().findOne({id: id})

             if (response) {
                 return response as UserProfile
             }
             throw Error("Failed to find profile with the given id")
         } catch (error) {
             console.error("Failed to find element by id")
             throw error
         }
     }

     /**
      * Updates an existing profile
      * @param profile the profile to update
      * @returns true, if the profile could be updated, false otherwise
      */
     async update(profile: UserProfile): Promise<boolean> {
         try {
             const response = await this.getCollection().replaceOne(
                 {id: profile.id}, profile)

             return (response) ? response.modifiedCount > 0 : false
         } catch (error) {
             console.error("Failed to update profile")
             throw error
         }
     }

     /**
      * Remove a profile given its id
      * @param id the profile id
      * @returns true if the profile could be removed, false otherwise
      */
     async removeById(id: number): Promise<boolean> {
         try {
             const response = await this.getCollection().deleteOne({id: id}, {})
             return (response.deletedCount) ? response.deletedCount > 0 : false
         } catch (error) {
             console.log("Failed to remove element")
             throw error
         }
     }

     /**
      * Generate a new profile id using a db sequence.
      * @returns the new id
      */
     async nextId(): Promise<number> {
        try {
            const seqColl = dbConnect.getDb()
                .collection(config.db.collections.sequences)
            const result = await seqColl.findOneAndUpdate(
                {name: "profile_id"}, 
                {$inc: {value: 1}})
            if (result.ok) {
                return result.value.value as number
            }
            throw Error()
        } catch (error) {
            console.error("Failed to generate a new profile id")
            throw error
        }
     }
 }
