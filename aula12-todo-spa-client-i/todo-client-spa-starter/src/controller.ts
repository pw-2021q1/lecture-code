namespace Controller {
    let newestView: View.ListView
    let addView: View.AddView
    let addButton: View.ActionButtonView
    const dao = new Model.ToDoItemDAO()

    function createComponents() {
        newestView = new View.ListView(
            document.querySelector("#newest-tab"),
            document.querySelector("#newest-content"))
        addView = new View.AddView(document.querySelector("#form-modal"))
        addButton = new View.ActionButtonView(document.querySelector("#btn-add"))
    }

    function refreshList() {
        dao.listAll()
            .then(items => newestView.render(items))
            .catch(error => console.error(error))
    }

    function initToolbar() {
        addButton.container?.addEventListener("click", () =>
            addView.render(null))
    }

    async function handleInsert() {
        try {
            const status = await dao.insert(addView.parse())
            refreshList()
        } catch(error) {
            console.error("Failed to process update operation")
        }
        addView.dismiss()
    }

    function initAddView() {
        addView.form.addEventListener("submit", async (ev) => {
            ev.preventDefault()
            addView.disable()
            await handleInsert()
            addView.enable()
        })
    }

    window.addEventListener("load", function () {
        createComponents()
        initToolbar()
        initAddView()
        dao.listAll()
            .then(items => newestView.render(items))
            .catch(error => console.error("Failed to load data from the server" + error))

    })
}