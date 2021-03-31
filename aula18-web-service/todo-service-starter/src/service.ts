import { Database } from "./database"
import * as model from "./model"

export class ValidationError extends Error {}
export class DatabaseError extends Error {}

export class ToDoItemService {
    dao: model.ToDoItemDAO

    constructor(database: Database) {
        this.dao = new model.ToDoItemDAO(database)
    }

    async list() {
        return await this.dao.listAll()
    }

    async add(json: any) {
        const item = this.parseModel(json)
        const status = await this.dao.insert(item)

        if (!status) {
            throw new DatabaseError("Failed to store new element")
        }
    }

    update(json: any) {

    }

    removeById(id: number) {

    }

    findById(id: number) {
        
    }

    private parseModel(json: any): model.ToDoItem {
        if (!("description" in json) || json.description.trim().length < 1) {
            throw new ValidationError("Missing description property")
        }

        const item = new model.ToDoItem(json.description)

        if ("id" in json && !isNaN(json.id)) {
            item.id = json.id
        }
        if ("tags" in json && Array.isArray(json.tags)) {
            item.tags = (json.tags as string[]).map(value => value.trim())
                .filter(value => value.length > 0)
        }
        if ("deadline" in json && !isNaN(Date.parse(json.deadline))) {
            item.deadline = new Date(Date.parse(json.deadline)).toUTCString()
        }

        return item
    }
}