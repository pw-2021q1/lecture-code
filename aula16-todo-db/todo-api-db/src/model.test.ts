/**
 * Examples of test cases for the model layer
 * You can think of additional tests to make the suite more complete
 */

import { Database } from "./database"
import { ToDoItem, ToDoItemDAO } from "./model"
import {strict as assert} from "assert"

describe("ToDoItemDAO", () => {
    const database = new Database()
    const dao = new ToDoItemDAO(database)

    before(async () => await database.connect())

    after(async () => await database.disconnect())

    describe("listAll", () => {
        it("return element must be array", async () => {
            const result = await dao.listAll()
    
            assert.equal(Array.isArray(result), true, "Return value is not array")
        })
    })

    describe("insert", () => {
        it("should be successfull", async () => {
            const item = new ToDoItem("Do something")

            try {
                await dao.insert(item)
            } catch (error) {
                console.error(error)
                assert.fail("Insert should not throw an error")
            }
        })

        it("should increment quantity of elements", async () => {
            const itemsBefore = await dao.listAll()
            const item = new ToDoItem("Do something new")

            await dao.insert(item)

            const itemsAfter = await dao.listAll()
            const qty = itemsAfter.length - itemsBefore.length

            assert.equal(qty, 1, "Quantity out of expected value")
        })

        it("retrieved element is equal to inserted element", async () => {
            const item = new ToDoItem("A random task")

            item.deadline = new Date().toUTCString()
            item.tags = ["tag10", "tag20"]

            const newId = await dao.insert(item)
            const retrItem = await dao.findById(newId)

            assert.equal(item.isEqual(retrItem), true, 
                "Retrieved item different from original item")
        })
    })

    describe("findById", () => {

        it("valid id should retrieve valid element", async () => {
            const allElements = await dao.listAll()

            for (const element of allElements) {
                const retrElement = await dao.findById(element.id)

                assert.equal(element.id, retrElement.id, "Element does not match id")
            }
        })

        it("invalid id should return no element", async () => {
            try {
                await dao.findById(-1)
            } catch (error) {
                return
            }
            assert.fail("Id -1 should return no element")            
        })
    })

    describe("removeById", () => {
        it("Remove should decrease quantity of elements", async () => {
            const before = await dao.listAll()
    
            if (before.length < 1) {
                throw new Error("Not enough elements to perform the test")
            }
    
            const status = await dao.removeById(before[0].id)
    
            assert.equal(status, true, "Remove should be successfull")
    
            const after = await dao.listAll()
    
            assert.equal(before.length - after.length, 1, "Quantity not decreased")
        })
    })

    describe("update", () => {
        it("Update with valid id is successfull", async () => {
            const items = await dao.listAll()
    
            assert.equal(items.length > 1, true, "Impossible to update an empty collection")
            
            const item = await dao.findById(items[0].id)
    
            assert.equal(await dao.update(item), true)
        })
    
        it("Update with invalid id is unsuccessfull", async () => {        
            const item = new ToDoItem("Test")
    
            item.id = -1
            assert.equal(await dao.update(item), false)
        })
    
        it("Update changes description", async () => {
            const items = await dao.listAll()
    
            assert.equal(items.length > 1, true, "Impossible to update an empty collection")
            
            const item = await dao.findById(items[0].id)
            const newDesc = "Test description"
    
            assert.notEqual(item.description, newDesc, "Descriptions should differ")
            item.description = newDesc
    
            await dao.update(item)
    
            const retrItem = await dao.findById(item.id)
    
            assert.equal(retrItem.description, newDesc, "Updated description does not match expected value")
    
        })
    })

    
})