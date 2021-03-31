import {config} from "../conf/config"
import * as dbConnect from "./database"

/**
 * Data model
 */
export class ToDoItem {
    id: number
    description: string
    tags: string[]
    deadline: string

    constructor(description: string) {
        this.id = 0
        this.description = description
        this.tags = []
        this.deadline = ""
    }
    
    isValid = () => this.description.length > 0

    isEqual = (item: ToDoItem) => this.id == item.id
        && this.description == item.description
        && Date.parse(this.deadline) == Date.parse(item.deadline)
        && JSON.stringify(this.tags) == JSON.stringify(item.tags)
}

/**
 * ToDo DAO object
 */
 export class ToDoItemDAO {
     private database: dbConnect.Database
     
     constructor(database: dbConnect.Database) {
         this.database = database
     }

     private getCollection() {
         return this.database.getDb().collection(config.db.collections.todoItems)
     }

     private async newId(): Promise<number> {
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
             console.log("Failed to generate id")
             throw error
         }
     }

     /**
      * Insert a new item
      * @param toDoItem 
      * @returns the id of the inserted item
      */
     async insert(item: ToDoItem): Promise<number> {
        try {
            item.id = await this.newId()

            const response = await this.getCollection().insertOne(item)

            if (!response || response.insertedCount < 1) {
               throw new Error("Invalid result while inserting element")
            }

            return item.id
        } catch (error) {
            console.log("Failed to insert element")
            throw error
        }
     }

     /**
      * List all todo items
      */
     async listAll(): Promise<ToDoItem[]> {
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
      * Find an item using its id
      * @param id the item id
      */
     async findById(id: number): Promise<ToDoItem> {
         try {
             const response = await this.getCollection().findOne(
                 {id: id}, 
                 {projection: {_id: 0}})
            
             if (response) {
                 return response as ToDoItem
             }
             throw new Error("Failed to find element with the given id")
         } catch (error) {
             console.error("Failed to find element by id")
             throw error
         }
     }

     async update(toDoItem: ToDoItem): Promise<boolean> {
         try {
             const response = await this.getCollection().replaceOne(
                 {id: toDoItem.id}, toDoItem)

             return (response) ? response.modifiedCount > 0 : false
         } catch (error) {
             console.error("Failed to update element")
             throw error
         }
     }

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
