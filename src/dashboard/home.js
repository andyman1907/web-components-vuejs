const axios = require("axios");

let home = {
    getListComponent: async () => {
        const data = await axios.get("js/components.json");
        return data;
    },
    getListComponentx: "hellos"
}

export {home}