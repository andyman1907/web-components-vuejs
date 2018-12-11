import { response } from "./components/handleComponents";
import './shared/css/app.styl';
import './shared/css/app.scss';
require("materialize-loader");
import { selectors as $ } from "./shared/util/selectors";
import { handleUI } from "./components/handleUI";

async function render() {
    try {
        const main = $.id("main");
        const container = document.createElement("div");
        container.innerHTML = await handleUI.getComponents();
        main.appendChild(container);
        response.activateLiveEvents();
    } catch (error) {
        console.log(error);
    }
}
render();
