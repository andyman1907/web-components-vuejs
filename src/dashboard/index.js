import { response } from "./components/handleComponents";


import './shared/css/app.styl';
//import './shared/css/app.scss';
require("materialize-loader");

// import makeMessage from './make-message.js';
// import renderToDOM from './render-to-dom';
// import { firstMessage, delayedMessage } from './messages.js';
// renderToDOM(makeMessage(firstMessage));
// delayedMessage();

// async function loadComponents() {
//     try {
//         const response = await home.getListComponent();        
//         response.data.forEach(element => {
//             console.log(element);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }
async function render() {
    try {
        const main = document.getElementById("main");
        const container = document.createElement("div")
        container.innerHTML = await response.getComponents();
        main.appendChild(container);
        response.inspect();
        // const r = await response.getComponents();
        // console.log(r);
        // container.appendChild(r)
        // main.appendChild(container);
        // response.inspect();
    } catch (error) {
        console.log(error);
    }
}
render();
