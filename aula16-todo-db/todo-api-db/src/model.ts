/**
 * Model layer
 */

import { Database } from "./database"
import {config} from "../conf/config"

/**
 * Domain object
 */
export class ToDoItem {
    id?: number
    description: string
    tags?: string[]
    deadline?: string

    constructor(description: string) {
        this.description = description
    }

    isEqual(item: ToDoItem) {
        return this.id == item.id 
         && this.description == item.description
         && this.deadline == item.deadline
         && JSON.stringify(this.tags) == JSON.stringify(item.tags)
    }
}

/**
 * ToDo DAO object
 */

export class ToDoItemDAO {
    private database: Database

    constructor(database: Database) {
        this.database = database
    }

    /**
     * Get the main collection
     * @returns the main collection
     */
    private getCollection() {
        return this.database.getDb().collection(config.db.collections.todoItems)
    }

    /**
     * Retrieve all elements in the main collection
     * @returns an array of todo items
     */
    async listAll(): Promise<ToDoItem[]> {
        try {
            return await this.getCollection().find(
                {}, 
                {projection: {_id: 0}}).toArray()
        } catch(error) {
            console.error("Failed to list elements")
            throw error
        }
    }

    /**
     * Generates a new valid item id (updates the sequence collection)
     * @returns a new id
     */
    private async nextId(): Promise<number> {
        try {
            const seqColl = this.database.getDb()
                .collection(config.db.collections.sequences)
            const result = await seqColl.findOneAndUpdate(
                {name: "todo-item-id"},
                {$inc: {value: 1}})
            
            if (result.ok) {
                return result.value.value as number
            }
            throw new Error("Invalid result during id generation")
        } catch (error) {
            console.error("Failed to generate id")
            throw error
        }
    }

    /**
     * Insert a new element
     * @param item the item to insert
     * @returns the generated id of the inserted item
     */
    async insert(item: ToDoItem): Promise<number> {
        try {
            item.id = await this.nextId()

            const response = await this.getCollection().insertOne(item)

            if (response.insertedCount > 0) {
                return item.id
            }
            throw new Error("Invalid result while inserting element")
        } catch (error) {
            console.error("Failed to insert element")
            throw error
        }
    }

    /**
     * Retrieve an item given its id
     * @param id the element id
     * @returns true if operation was successfull, false otherwise
     */
    async findById(id: number): Promise<ToDoItem> {
        try {
            const response = await this.getCollection().findOne(
                {id: id}, 
                {projection: {_id: 0}})

            if (response) {
                return response as ToDoItem
            }
            throw new Error("Failed to find element with provided id")
        } catch (error) {
            console.error("Failed to find element by id")
            throw error
        }
    }

    /**
     * Update a stored item. The id of the provided item is used
     * as a query parameter, consequently:
     * i) item.id must be valid stored id
     * ii) it is not possible to update the id of a stored item
     * @param item the item to update
     * @returns true if operation was successfull, false otherwise
     */
    async update(item: ToDoItem): Promise<boolean> {
        try {
            const response = await this.getCollection().replaceOne(
                {id: item.id}, item)

            return (response) ? response.modifiedCount > 0 : false
        } catch (error) {
            console.error("Failed to update element")
            throw error
        }
    }

    /**
     * Remove an element, given its id.
     * @param id the id of the element to remove
     * @returns true is successfull, false otherwise
     */
    async removeById(id: number): Promise<boolean> {
        try {
            const response = await this.getCollection().deleteOne(
                {id: id}, 
                {})
            return (response.deletedCount) ? response.deletedCount > 0 : false
        } catch (error) {
            console.error("Failed to remove element")
            throw error
        }
    }

}