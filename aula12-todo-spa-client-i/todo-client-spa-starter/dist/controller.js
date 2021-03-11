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
var Controller;
(function (Controller) {
    let newestView;
    let addView;
    let addButton;
    const dao = new Model.ToDoItemDAO();
    function createComponents() {
        newestView = new View.ListView(document.querySelector("#newest-tab"), document.querySelector("#newest-content"));
        addView = new View.AddView(document.querySelector("#form-modal"));
        addButton = new View.ActionButtonView(document.querySelector("#btn-add"));
    }
    function refreshList() {
        dao.listAll()
            .then(items => newestView.render(items))
            .catch(error => console.error(error));
    }
    function initToolbar() {
        var _a;
        (_a = addButton.container) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => addView.render(null));
    }
    function handleInsert() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const status = yield dao.insert(addView.parse());
                refreshList();
            }
            catch (error) {
                console.error("Failed to process update operation");
            }
            addView.dismiss();
        });
    }
    function initAddView() {
        addView.form.addEventListener("submit", (ev) => __awaiter(this, void 0, void 0, function* () {
            ev.preventDefault();
            addView.disable();
            yield handleInsert();
            addView.enable();
        }));
    }
    window.addEventListener("load", function () {
        createComponents();
        initToolbar();
        initAddView();
        dao.listAll()
            .then(items => newestView.render(items))
            .catch(error => console.error("Failed to load data from the server" + error));
    });
})(Controller || (Controller = {}));
