import Api from './Services/Api.js';
import Store from './Services/Store.js';
import { loadData } from './Services/menu.js';

window.app = {};
app.store = Store

window.addEventListener('DOMContentLoaded',function(){
    loadData();
})