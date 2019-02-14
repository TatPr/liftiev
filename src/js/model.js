import axios from "axios";

export default class Model {
    constructor() {
        this.data = [];
    }

    // Get Data from JSON
    async getData(name) {
        // File name
        const fileName = name ? `${name}.json` : 'day.json';

        try {
            const result = await axios (`js/data/${fileName}`);
            this.data = result.data;
        } catch {
            alert('Something went wrong :(');
        }
    }
}