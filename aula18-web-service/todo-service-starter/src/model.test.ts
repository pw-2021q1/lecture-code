import {describe} from "mocha"
import {strict as assert} from "assert"
import { Database } from "./database"
import * as model from "./model"

describe("Test DAO", () => {
    const database = new Database()
    const dao = new model.ToDoItemDAO(database)

    before(async () => await database.connect())

    after(async () => await database.disconnect())

    it("List all should return at least one element", async () => {
        const result = await dao.listAll()
        assert.equal(result.length > 1, true, "No element was returned")
    })

    it("Insert should be successfull", async () => {
        const item = new model.ToDoItem("Do something")

        try {
            await dao.insert(item)
        } catch(error) {
            console.error(error)
            assert.fail("Insert should not throw error")
        }
    })

    it("Insert should increase quantity of elements", async () => {
        const itemsBefore = await dao.listAll()
        const item = new model.ToDoItem("Do something new")

        await dao.insert(item)

        const itemsAfter = await dao.listAll()

        assert.equal(itemsAfter.length - itemsBefore.length, 1, "Quantity out of expected")
    })

    it("Retrieved element is equal to inserted element", async () => {
        const item = new model.ToDoItem("A random task")

        item.deadline = new Date(Date.parse("01/01/2001")).toUTCString()
        item.tags = ["tag4", "tag5"]

        const newId = await dao.insert(item)
        const retrItem = await dao.findById(newId)

        assert.equal(item.isEqual(retrItem), true, "Items are not equal")
    })
    

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

    it("Valid id should return a valid element", async () => {
        const allElements = await dao.listAll()

        for (const el of allElements) {
            const retrEl = await dao.findById(el.id)

            assert.equal(el.id, retrEl.id, "Element does not match id")
        }
    })

    it("Invalid id should return no element", async () => {
        try {
            await dao.findById(-1)
            assert.fail("Id -1 should return no element")
        } catch(err) {}
    })

    it("Update with valid id is successfull", async () => {
        const items = await dao.listAll()

        assert.equal(items.length > 1, true, "Impossible to update an empty collection")
        
        const item = await dao.findById(items[0].id)

        assert.equal(await dao.update(item), true)
    })

    it("Update with invalid id is unsuccessfull", async () => {        
        const item = new model.ToDoItem("Test")

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

    it("Remove should decrease quantity of elements", async () => {
        const itemsBefore = await dao.listAll()

        assert.equal(before.length > 1, true, "Impossible to update an empty collection")
        
        const item = await dao.removeById(itemsBefore[0].id)
        const itemsAfter = await dao.listAll()

        assert.equal(itemsBefore.length - itemsAfter.length, 1, "Resulting quantity out of expected")
    })
})