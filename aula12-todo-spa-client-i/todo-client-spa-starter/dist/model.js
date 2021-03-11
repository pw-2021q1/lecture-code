"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Model;
(function (Model) {
    const RA = "2123689";
    const HOST = "https://pw2021q1-todo-spa.herokuapp.com/api";
    /**
     * Domain object
     */
    class ToDoItem {
        constructor(description) {
            this.id = 0;
            this.description = description;
            this.tags = [];
            this.deadline = "";
        }
    }
    Model.ToDoItem = ToDoItem;
    /**
     * DAO
     */
    class ToDoItemDAO {
        listAll() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield fetch(`${HOST}/${RA}/list`);
                    if (response.ok) {
                        return (yield response.json()).items;
                    }
                    console.error("Server status: "
                        + JSON.stringify(yield response.json()));
                    throw new Error("Failed to retrieved elements from the server");
                }
                catch (error) {
                    console.log("Failed to list elements");
                    throw error;
                }
            });
        }
        insert(item) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield fetch(`${HOST}/${RA}/add`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(item)
                    });
                    if (response.ok) {
                        return true;
                    }
                    console.error("Server-side error. Failed to insert.");
                    console.error("Server.status: " + JSON.stringify(yield response.json()));
                    throw new Error("Failed to insert element");
                }
                catch (error) {
                    console.error("Failed to insert element");
                    throw error;
                }
            });
        }
    }
    Model.ToDoItemDAO = ToDoItemDAO;
})(Model || (Model = {}));
// window.addEventListener("load", async function () {
//     const dao = new Model.ToDoItemDAO()
//     // console.log(await dao.listAll())
//     const item = new Model.ToDoItem("testing insertion")
//     dao.insert(item)
// })
