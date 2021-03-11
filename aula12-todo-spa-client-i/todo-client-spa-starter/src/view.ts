namespace View {
    declare var bootstrap: any

    type NElement = Element | null
    import ToDoItem = Model.ToDoItem

    export interface View {
        render(args: any): void
    }

    abstract class TabView implements View {
        tabEl: NElement
        contentEl: NElement

        constructor(tabEl: NElement, contentEl: NElement) {
            this.tabEl = tabEl
            this.contentEl = contentEl
        }

        abstract render(items: ToDoItem[]): void
    }

    export class ListView extends TabView {

        private clearContainer() {
            while (this.contentEl?.lastChild) {
                this.contentEl.removeChild(this.contentEl.lastChild)
            }
        }

        private compare(a: ToDoItem, b: ToDoItem) {
            const dateA = Date.parse(a.deadline || "")
            const dateB = Date.parse(b.deadline || "")

            /**
             * Criteria for descending date order
             * a?.deadline < b?.deadline -> 1
             * a.deadline > b.deadline -> -1
             * a.deadline = b.deadline = 0
             */
            if (dateA && dateB) {
                if (dateA < dateB) {
                    return 1
                } else if (dateA > dateB) {
                    return -1
                }
                return 0
            } else if (!dateA && dateB) {
                return 1
            } else if (dateA && !dateB) {
                return -1
            }

            return 0
        }

        render(items: ToDoItem[]): void {
            items.sort(this.compare)
            this.clearContainer()
            for (const item of items) {
                const template = document.querySelector("#list-item-template") as HTMLTemplateElement
                const clone = template.content.cloneNode(true) as DocumentFragment
                const listItem = clone.querySelector(".list-group-item")
                const checkBox = clone.querySelector(".form-check-input")
                const description = clone.querySelector(".list-item-desc")
                const badgeContainer = clone.querySelector(".badge-container")
                const deadline = clone.querySelector(".list-item-deadline")
                const badgeTemplate = badgeContainer?.querySelector(".list-item-badge")

                checkBox?.setAttribute("data-id", item.id?.toString() || "")
                if (description) {
                    description.textContent = item.description
                }
                if (item.tags) {
                    for (const tag of item.tags) {
                        const newBadge = badgeTemplate?.cloneNode() as Element

                        newBadge.textContent = tag
                        badgeContainer?.append(newBadge)
                    }
                }
                badgeTemplate?.parentElement?.removeChild(badgeTemplate)
                if (deadline) {
                    const date = Date.parse(item.deadline || "")
                    deadline.textContent = (date) ? (new Date(date)).toLocaleDateString() : ""
                }
                if (listItem) {
                    this.contentEl?.append(listItem)
                }
            }
        }

    }

    export class AddView implements View {
        container: NElement
        modalRef: any
        form: HTMLFormElement

        constructor(container: NElement) {
            this.container = container
            this.form = this.container?.querySelector("#item-form") as HTMLFormElement
            this.modalRef = new bootstrap.Modal(this.container)

            this.container?.addEventListener("hidden.bs.modal", 
                () => this.form.reset())
        }

        parse(): ToDoItem {
            const descriptionEl = this.form.querySelector("#description") as HTMLInputElement
            const tagsEl = this.form.querySelector("#tags") as HTMLInputElement
            const deadlineEl = this.form.querySelector("#deadline") as HTMLInputElement
            const newItem = new ToDoItem(descriptionEl.value)

            newItem.tags = tagsEl.value.split(",")
                .map(s => s.trim()).filter(s => s.length > 0)
            newItem.deadline = deadlineEl.value || ""

            return newItem
            
        }

        render(args: any): void {
            this.modalRef.show()
        }

        dismiss() {
            this.modalRef.hide()
        }

        enable() {
            this.container?.querySelectorAll(".item-form-field")
                .forEach(field => field.removeAttribute("disabled"))
        }

        disable() {
            this.container?.querySelectorAll(".item-form-field")
                .forEach(field => field.setAttribute("disabled", ""))
        }

    }

    export class ActionButtonView implements View {
        container: NElement

        constructor(container: NElement) {
            this.container = container
        }

        render(args: any): void {}
    }
    
}