"use strict";
var View;
(function (View) {
    var ToDoItem = Model.ToDoItem;
    class TabView {
        constructor(tabEl, contentEl) {
            this.tabEl = tabEl;
            this.contentEl = contentEl;
        }
    }
    class ListView extends TabView {
        clearContainer() {
            var _a;
            while ((_a = this.contentEl) === null || _a === void 0 ? void 0 : _a.lastChild) {
                this.contentEl.removeChild(this.contentEl.lastChild);
            }
        }
        compare(a, b) {
            const dateA = Date.parse(a.deadline || "");
            const dateB = Date.parse(b.deadline || "");
            /**
             * Criteria for descending date order
             * a?.deadline < b?.deadline -> 1
             * a.deadline > b.deadline -> -1
             * a.deadline = b.deadline = 0
             */
            if (dateA && dateB) {
                if (dateA < dateB) {
                    return 1;
                }
                else if (dateA > dateB) {
                    return -1;
                }
                return 0;
            }
            else if (!dateA && dateB) {
                return 1;
            }
            else if (dateA && !dateB) {
                return -1;
            }
            return 0;
        }
        render(items) {
            var _a, _b, _c;
            items.sort(this.compare);
            this.clearContainer();
            for (const item of items) {
                const template = document.querySelector("#list-item-template");
                const clone = template.content.cloneNode(true);
                const listItem = clone.querySelector(".list-group-item");
                const checkBox = clone.querySelector(".form-check-input");
                const description = clone.querySelector(".list-item-desc");
                const badgeContainer = clone.querySelector(".badge-container");
                const deadline = clone.querySelector(".list-item-deadline");
                const badgeTemplate = badgeContainer === null || badgeContainer === void 0 ? void 0 : badgeContainer.querySelector(".list-item-badge");
                checkBox === null || checkBox === void 0 ? void 0 : checkBox.setAttribute("data-id", ((_a = item.id) === null || _a === void 0 ? void 0 : _a.toString()) || "");
                if (description) {
                    description.textContent = item.description;
                }
                if (item.tags) {
                    for (const tag of item.tags) {
                        const newBadge = badgeTemplate === null || badgeTemplate === void 0 ? void 0 : badgeTemplate.cloneNode();
                        newBadge.textContent = tag;
                        badgeContainer === null || badgeContainer === void 0 ? void 0 : badgeContainer.append(newBadge);
                    }
                }
                (_b = badgeTemplate === null || badgeTemplate === void 0 ? void 0 : badgeTemplate.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild(badgeTemplate);
                if (deadline) {
                    const date = Date.parse(item.deadline || "");
                    deadline.textContent = (date) ? (new Date(date)).toLocaleDateString() : "";
                }
                if (listItem) {
                    (_c = this.contentEl) === null || _c === void 0 ? void 0 : _c.append(listItem);
                }
            }
        }
    }
    View.ListView = ListView;
    class AddView {
        constructor(container) {
            var _a, _b;
            this.container = container;
            this.form = (_a = this.container) === null || _a === void 0 ? void 0 : _a.querySelector("#item-form");
            this.modalRef = new bootstrap.Modal(this.container);
            (_b = this.container) === null || _b === void 0 ? void 0 : _b.addEventListener("hidden.bs.modal", () => this.form.reset());
        }
        parse() {
            const descriptionEl = this.form.querySelector("#description");
            const tagsEl = this.form.querySelector("#tags");
            const deadlineEl = this.form.querySelector("#deadline");
            const newItem = new ToDoItem(descriptionEl.value);
            newItem.tags = tagsEl.value.split(",")
                .map(s => s.trim()).filter(s => s.length > 0);
            newItem.deadline = deadlineEl.value || "";
            return newItem;
        }
        render(args) {
            this.modalRef.show();
        }
        dismiss() {
            this.modalRef.hide();
        }
        enable() {
            var _a;
            (_a = this.container) === null || _a === void 0 ? void 0 : _a.querySelectorAll(".item-form-field").forEach(field => field.removeAttribute("disabled"));
        }
        disable() {
            var _a;
            (_a = this.container) === null || _a === void 0 ? void 0 : _a.querySelectorAll(".item-form-field").forEach(field => field.setAttribute("disabled", ""));
        }
    }
    View.AddView = AddView;
    class ActionButtonView {
        constructor(container) {
            this.container = container;
        }
        render(args) { }
    }
    View.ActionButtonView = ActionButtonView;
})(View || (View = {}));
