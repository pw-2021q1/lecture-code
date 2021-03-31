import axios from "axios"
import { ToDoItem, ToDoItemDAO } from "./model"

const url = "http://localhost:3000/api"

async function testList() {
    try {
        const response = await axios.get(`${url}/list`)

        console.log(response.status)
        console.dir(response.data, {depth: null})
    } catch (error) {
        console.error(error)
    }
}

async function testAdd() {
    try {
        const item = new ToDoItem("Testing insert on REST CLI client")

        item.deadline = new Date(Date.parse("03/31/2021")).toUTCString()
        item.tags = ["tag3", "tag4"]

        const response = await axios.put(`${url}/add`, item)

        console.log(response.status)
        console.dir(response.data)
    } catch (error) {
        console.error(error)
    }
}

testList()
// testAdd()