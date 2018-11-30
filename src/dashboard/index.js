import { home } from "./home.js";

import './shared/css/app.styl';
// import makeMessage from './make-message.js';
// import renderToDOM from './render-to-dom';
// import { firstMessage, delayedMessage } from './messages.js';
// renderToDOM(makeMessage(firstMessage));
// delayedMessage();

async function loadComponents() {
    try {
        const response = await home.getListComponent();        
        response.data.forEach(element => {
            console.log(element);
        });
    } catch (error) {
        console.log(error);
    }
}
loadComponents();
