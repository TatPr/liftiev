import { elements } from './base';

// Render Data to DOM
export const renderData = (data) => {
    const source = document.querySelector('#template').innerHTML;
    let template = Handlebars.compile(source);
    let ourHtml = template(data);

    elements.dashboardList.innerHTML = ourHtml;
};