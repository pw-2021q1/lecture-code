namespace View {
    /**
     * Global reference to the bootstrap object
     */
    declare var bootstrap: any

    /**
     * Custom helper types
     */
    type NElement = Element | null
    import ToDoItem = Model.ToDoItem

    /**
     * The root of the view hierarchy
     */
    export interface View {
        /**
         * Renders the dynamic (or static) content of a view component
         * @param args anything
         */
        render(args: any): void
    }

    /**
     * A Tab component
     */
    export abstract class TabView implements View {
        tabEl: NElement
        contentEl: NElement

        constructor(tabEl: NElement, contentEl: NElement) {
            this.tabEl = tabEl
            this.contentEl = contentEl
        }

        /**
         * Remove all lines from list
         */
         protected clearContainer() {
            while (this.contentEl?.lastChild) {
                this.contentEl.removeChild(this.contentEl.lastChild)
            }
        }

        /**
         * Whether the current is active (i.e. being shown)
         * @returns true if active, false otherwise
         */
        isActive(): boolean {
            return this.tabEl?.classList.contains("active") || false
        }

        /**
         * Returns the ids of all checked items
         * @returns a list of ids (as numbers)
         */
         getCheckedIds(): number[] {
            const checks = this.contentEl?.querySelectorAll(".form-check-input:checked")
            const ids: number[] = []

            checks?.forEach(check => {
                const id = parseInt(check.getAttribute("data-id") || "")

                if (id) ids.push(id)
            })

            return ids
        }

        abstract render(items: ToDoItem[]): void
    }

    /**
     * A Tab component that lists items in reverse chronological order
     */
    export class NewestView extends TabView {

        /**
         * Comparable to sort items in descending date order
         * @param a 
         * @param b 
         * @returns 
         */
        private compare(a: ToDoItem, b: ToDoItem) {
            const dateA = Date.parse(a.deadline || "")
            const dateB = Date.parse(b.deadline || "")

            /**
             * Criteria for descending date order
             * a?.deadline < b?.deadline -> 1
             * a.deadline > b.deadline -> -1
             * a.deadline = b.deadline = 0
             * We should also account for null values
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
        

        /**
         * Fill the container with a list of todo items
         * @param items a list of todo items
         */
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
                    deadline.textContent = (date) ? new Date(date).toUTCString().slice(0,16) : ""
                }
                if (listItem) {
                    this.contentEl?.append(listItem)
                }
            }
        }

    }

    /**
     * List items in chronological order
     */
    export class OldestView extends TabView {
        // TODO: implement oldest list
        render(items: ToDoItem[]): void {
            throw new Error("Method not implemented.")
        }
    }

    
    /**
     * List items grouped by tags
     */
    export class TagsView extends TabView {
        // todo: implement tags group list
        render(items: ToDoItem[]): void {
            throw new Error("Method not implemented.")
        }
    }

    /**
     * A Component representing the insertion form
     */
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

        /**
         * Convert the form fields to a domain object
         * @returns a todo item
         */
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

        /**
         * 
         * @param args Shows the form
         */
        render(args: any): void {
            this.modalRef.show()
        }
        
        /**
         * Hides the form
         */
        dismiss() {
            this.modalRef.hide()
        }

        /**
         * Enable the form
         */
        enable() {
            this.container?.querySelectorAll(".item-form-field")
                .forEach(field => field.removeAttribute("disabled"))
        }

        /**
         * Disable the form
         */
        disable() {
            this.container?.querySelectorAll(".item-form-field")
                .forEach(field => field.setAttribute("disabled", ""))
        }

    }

    /**
     * A component representing the edit form.
     */
    export class EditView implements View {
        // TODO: implement edit view
        render(args: any): void {
            throw new Error("Method not implemented.")
        }

    }

    /**
     * A view that represents an action button
     */
    export class ActionButtonView implements View {
        container: NElement

        constructor(container: NElement) {
            this.container = container
        }

        render(args: any): void {}

        /**
         * Put the button in enabled state
         */
        enable() {
            this.container?.classList.remove("disabled")
        }

        /**
         * Put the button in disabled state
         */
        disable() {
            this.container?.classList.add("disabled")
        }
    }

    /**
     * Enumeration of notification styles
     */
    enum NotificationStyle {
        success = "bg-success",
        error = "bg-danger",
        info = "bg-primary"
    }

    /**
     * A component that shows a notification for various types of messages
     */
    export class NotificationView implements View {
        private toastEl: NElement
        private toast: any
        private messageNode: NElement

        constructor() {
            this.toastEl = document.querySelector("#toast")
            this.toast = new bootstrap.Toast(this.toastEl)
            this.messageNode = this.toastEl?.querySelector(".toast-body") || null
        }

        /**
         * Renders a message
         * @param message the text message to render
         */
        render(message: string): void {
            if (this.messageNode) {
                this.messageNode.textContent = message
                this.toast.show()
            }
        }

        /**
         * Set the message style
         * @param style a possible style
         */
        private setStyle(style: NotificationStyle) {
            this.toastEl?.classList.remove(NotificationStyle.error)
            this.toastEl?.classList.remove(NotificationStyle.success)
            this.toastEl?.classList.remove(NotificationStyle.info)
            this.toastEl?.classList.add(style)
        }

        /**
         * Shows a success message
         * @param message the text message
         */
        success(message: string) {
            this.setStyle(NotificationStyle.success)
            this.render(message)
        }

        /**
         * Shows an error message
         * @param message the text message
         */
        error(message: string) {
            this.setStyle(NotificationStyle.error)
            this.render(message)
        }

        /**
         * Shows an informational message
         * @param message the text message
         */
        info(message: string) {
            this.setStyle(NotificationStyle.info)
            this.render(message)
        }

    }
    
}