import Api from "./Api.JS";

export  async function loadData() {
    app.store.menu  = await Api.fetchMenu()
}