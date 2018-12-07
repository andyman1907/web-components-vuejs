import { response } from "./components/handleComponents";
import './shared/css/app.styl';
import './shared/css/app.scss';
require("materialize-loader");
import { selectors as $ } from "./shared/util/selectors";

async function render() {
    try {
        const main = $.id("main");
        const container = document.createElement("div");
        container.innerHTML = await response.getComponents();
        main.appendChild(container);
        response.inspect();
    } catch (error) {
        console.log(error);
    }
}
render();
