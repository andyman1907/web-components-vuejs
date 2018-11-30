const axios = require("axios");

module.exports = {
    getListComponent: async () => {
        const data = await axios.get("http://localhost:9000/js/components.json");
        return data;
    },
    getListComponent:"hellos"
}
