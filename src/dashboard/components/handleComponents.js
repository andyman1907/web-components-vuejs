const axios = require("axios");
import { errorHandle } from "./errorHandle";

let response = {
    getListComponent: async () => {
        let data = {};
        try {
            data = await axios.get("dist-dashboard/js/components.json");
        } catch (error) {
            errorHandle.doCatch(error);
        }
        return data;
    },
    getComponents: async () => {
        //let html = document.createElement('div');
        let html = '';
        try {
            const res = await axios.get("js/components.json");
            if (res.data.length > 0) {
                res.data.forEach(element => {
                    //const structure = (element.structure != null) ? "data-action='" + JSON.stringify(element.structure) + "'" : '';                    
                    const structure = (element.structure != null) ? "data-action='" + JSON.stringify(element.structure) + "'" : '';
                    const button = ``;

                    // const slotTitle=document.createElement("div")
                    // slotTitle.setAttribute("slot","title");
                    // slotTitle.innerHTML=element.name;

                    // const slotContent=document.createElement("div")
                    // slotContent.setAttribute("slot","title");
                    // slotContent.innerHTML=element.name;

                    // const slotImageContent=document.createElement("img")
                    // slotImageContent.setAttribute("src","https://ingenieroandresmora.com/proyectos/web-components/img/select.png");                    

                    // const slotImage=document.createElement("div")
                    // slotImage.setAttribute("slot","image");
                    // slotImage.appendChild(slotImageContent)                    

                    // const htmlElement = document.createElement("my-custom-card");
                    // htmlElement.setAttribute("data-action", "selectable");
                    // htmlElement.setAttribute("data-item-name", element.name);
                    // htmlElement.setAttribute("data-item-name", structure);
                    // htmlElement.appendChild(slotTitle)
                    // htmlElement.appendChild(slotContent)
                    // htmlElement.appendChild(slotImage)

                    // html.appendChild(htmlElement);
                    // html += `
                    // <my-custom-card data-action='selectable'
                    // data-item-name="${element.name}" 
                    // ${structure} 
                    // >
                    // <div slot="title">${element.name}</div>
                    // <div slot="content"><button  >escoger</button></div>
                    // <div slot="image"><img src="https://ingenieroandresmora.com/proyectos/web-components/img/select.png" /></div>
                    // </my-custom-card/>`;
                    html += `
                    <a data-action='selectable' class="col s6  button is-one-quarter" href="#"
                    data-item-name="${element.name}" 
                    ${structure} 
                    >${element.name}
                    <a/>`;
                    
                });
            }
            html =`<div class="row">${html}</div>`;
            return html;
        } catch (error) {
            errorHandle.doCatch(error);
        }
    },
    inspect: () => {
        try {
            const selectors = document.querySelectorAll("[data-action]");
            for (var i = 0; i < selectors.length; i++) {
                selectors[i].addEventListener("click", (e) => selectable(e))
            }
            document.addEventListener("click", function (ev) {
                //if(ev.target.data)
                ev.preventDefault();
                if (ev.target.shadowRoot != null) {
                    const findClickEvent = ev.target.shadowRoot.querySelectorAll("[data-clickevent]");
                    if (findClickEvent != null && findClickEvent.length > 0) {
                        let realMethod = '';
                        findClickEvent.forEach(element => {
                            realMethod=element.getAttribute("data-clickevent");
                            //console.log(element.dataSet["data-click"])
                        });
                        realMethod();
                    }
                }
                // console.log(ev.target.shadowRoot.querySelectorAll("[data-click]")[0]);
                // console.log(ev.target.dataset);
            })
        } catch (error) {
            errorHandle.doCatch(error);
        }
    }
}

function selectable(event) {
    try {

        const structure = (event.target.dataset.structure != null) ? "data-structure='" + JSON.stringify(event.target.dataset.structure) + "'" : '';
        const componentName = (event.target.dataset.itemName != null) ? event.target.dataset.itemName : null;
        if (structure != null && componentName != null) {
            let body = '';
            switch (componentName) {
                case "my-custom-card":
                    body = `
                    <form action="" class="fono" method="post">
                        <div>
                            <label>Titulo</label>
                            <input type="text" name="title" id="">
                        </div>
                        <div>
                            <label>Imagen</label>
                            <input type="text" name="url" id="">
                        </div>
                        <div>
                            <label>Descripción</label>
                            <textarea name="description" id="editor" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <button onClick="doSave()">Guardar</button>
                        </div>
                    </form>
                    `;
                    break;
                case "":

                    break;

                default:
                    break;
            }
            const modal = `
            <my-custom-modal id="selectorDashboard">
            <div slot="title">${componentName}</div>
            <div slot="content">${body}</div>
            </my-custom-modal>
            `;
            const main = document.getElementById("main");
            main.innerHTML += modal;
            setTimeout(() => {
                //CKEDITOR.replace( 'editor' );
                document.getElementById("selectorDashboard").click();
            }, 2000);

        }

    } catch (error) {
        errorHandle.doCatch(error);
    }
}
function doSave() {
    console.log(123456)
}

export { response }