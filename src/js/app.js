require.context("../img/", true, /\.(png|svg|jpg|gif)$/);
import '../scss/style.scss';

import Model from './model';
import * as view from './view';
import { elements } from './base';

// App State
const state = {};

// Model Controller
const controlModel = async (name) => {

    // New Model Object
    state.model = new Model();

    try {
        // Get Data from JSON
        await state.model.getData(name);

        // Render Data to DOM
        view.renderData(state.model.data);
    } catch {
        alert("Something went wrong :( app");
    }
};

// Init
controlModel();

// Dashboard Controllers
elements.dashboardTabsContainer.addEventListener('click', (e) => {
    e.preventDefault();

    // Active Class
    if (e.target.className == 'dashboard__tab') {
        const tabs = Array.prototype.slice.call(elements.dashboardTabs);
        tabs.forEach(elem => {
        elem.classList.remove('active');
        });
        e.target.classList.add('active');

        // Get Data from JSON
        controlModel(e.target.dataset.name);
    }
});

// Modal Window
elements.addButton.addEventListener('click', (e) => {
    elements.modal.classList.add('show');
});

elements.closeBtn.addEventListener('click', (e) => {
    elements.modal.classList.remove('show');
});