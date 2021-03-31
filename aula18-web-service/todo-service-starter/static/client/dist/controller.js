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
    let removeButton;
    let notification;
    const dynamicViews = [];
    const dao = new Model.ToDoItemDAO();
    /**
     * Determines which view component is being shown currently
     * @returns the active view
     */
    const getActiveView = () => dynamicViews.find(el => el.isActive());
    /**
     * Instantiate all UI components
     */
    function createComponents() {
        newestView = new View.NewestView(document.querySelector("#newest-tab"), document.querySelector("#newest-content"));
        addView = new View.AddView(document.querySelector("#form-modal"));
        addButton = new View.ActionButtonView(document.querySelector("#btn-add"));
        removeButton = new View.ActionButtonView(document.querySelector("#btn-remove"));
        notification = new View.NotificationView();
        dynamicViews.push(newestView); // TODO: add "oldest" and "tags" components here too 
    }
    /**
     * Refresh the list of tasks (currently we have only one implemented)
     */
    function refreshActiveView() {
        dao.listAll()
            .then(items => { var _a; return (_a = getActiveView()) === null || _a === void 0 ? void 0 : _a.render(items); })
            .catch(error => {
            console.error(error);
            notification.error("Failed to load data from the server");
        });
    }
    /**
     * Process the batch removal of items
     */
    function handleRemoval() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const checkedIds = ((_a = getActiveView()) === null || _a === void 0 ? void 0 : _a.getCheckedIds()) || [];
            const status = [];
            try {
                for (const id of checkedIds) {
                    status.push(yield dao.removeById(id));
                }
            }
            catch (error) {
                console.error("Failed to perform removal operation");
                console.error(error);
            }
            if (status.length < 1) {
                notification.info("Please, select an element to remove");
            }
            else if (status.reduce((acc, s) => acc && s)) {
                notification.success("ToDo item(s) removed successfully");
            }
            else {
                notification.error("Failed to remove ToDo item(s)");
            }
            refreshActiveView();
        });
    }
    /**
     * Configure the toolbar components
     */
    function initToolbar() {
        var _a, _b;
        (_a = addButton.container) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => addView.render(null));
        (_b = removeButton.container) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            removeButton.disable();
            yield handleRemoval();
            removeButton.enable();
        }));
    }
    /**
     * Handle the insert operation
     */
    function handleInsert() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const status = yield dao.insert(addView.parse());
                refreshActiveView();
                notification.success("Element added successfully");
            }
            catch (error) {
                console.error("Failed to process update operation");
                notification.error("Failed to add element");
            }
            addView.dismiss();
        });
    }
    /**
     * Configure the AddView component
     */
    function initAddView() {
        addView.form.addEventListener("submit", (ev) => __awaiter(this, void 0, void 0, function* () {
            ev.preventDefault();
            addView.disable();
            yield handleInsert();
            addView.enable();
        }));
    }
    /**
     * Refresh the active tab when a tab change occurs
     */
    const initDynamicViews = () => dynamicViews.forEach(view => { var _a; return (_a = view.tabEl) === null || _a === void 0 ? void 0 : _a.addEventListener("show.bs.tab", refreshActiveView); });
    /**
     * "Main" code, launch and configure the SPA
     */
    window.addEventListener("load", function () {
        createComponents();
        initToolbar();
        initDynamicViews();
        initAddView();
        refreshActiveView();
    });
})(Controller || (Controller = {}));
