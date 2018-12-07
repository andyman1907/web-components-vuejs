const axios = require("axios");
import { errorHandle } from "./errorHandle";
import { selectors as $ } from "../shared/util/selectors";
const uniqid = require('uniqid');
const domRemove = require('dom-remove');


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
                    element.structure = structure;
                    html += menuComponents(element);
                });
            }
            html = `<div class="row">${html}</div>`;
            return html;
        } catch (error) {
            errorHandle.doCatch(error);
        }
    },
    inspect: () => {
        try {
            activateLiveEvents();
        } catch (error) {
            errorHandle.doCatch(error);
        }
    }
}


function activateLiveEvents() {
    document.addEventListener("click", function (ev) {
        try {
            //if(ev.target.data)
            ev.preventDefault();
            // if (ev.target.shadowRoot != null) {
            //     console.log(2);
            //     const findClickEvent = ev.target.shadowRoot.$.all("[data-clickevent]");
            //     if (findClickEvent != null && findClickEvent.length > 0) {
            //         let realMethod = '';
            //         findClickEvent.forEach(element => {
            //             realMethod = element.getAttribute("data-clickevent");
            //             //console.log(element.dataSet["data-click"])
            //         });
            //         realMethod();
            //     }
            // }
            (ev.target.dataset["itemName"] != null) ? selectable(ev) : '';
            handleDeleteThis(ev);
            handleCloneThis(ev);
            handleEditThis(ev);
        } catch (error) {
            errorHandle.doCatch(error)
        }

    })
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
            // const html = `
            // <my-custom-modal id="selectorDashboard">
            // <div slot="title">${componentName}</div>
            // <div slot="content">${body}</div>
            // </my-custom-modal>
            // `;
            const component = {
                name: componentName
            }
            const main = $.id("selected-items");
            main.innerHTML += selectComponent(component);
            //($.$id("#selectorDashboard") != null) ? $.q("#selectorDashboard").click() : '';
            // const $items = $all("[data-custom]");
            // if ($items.length > 0) {
            //     $items.forEach(element => {
            //         element.addEventListener("click", function (event) {
            //             console.log(event);
            //         })
            //     });
            // }
            //console.log(items);
            // $all("[data-custom]").addEventListener("click", function (event) {
            //     console.log(event);
            // });
            activateMaterial();
        }

    } catch (error) {
        errorHandle.doCatch(error);
    }
}

function handleDeleteThis(event) {
    try {
        const referency = event.target.dataset.deleteThis;
        if (referency != null) {
            const $el = $.id(referency);
            domRemove($el);
        }

    } catch (error) {
        errorHandle.doCatch(error);
    }
}

function handleCloneThis(event) {
    try {
        const referency = event.target.dataset.cloneThis;
        if (referency != null) {
            const $el = $.id(referency);
            const $clone = $el.cloneNode(true);
            $el.parentNode.appendChild($clone);
        }

    } catch (error) {
        errorHandle.doCatch(error);
    }
}

function handleEditThis(event) {
    try {
        const referency = event.target.dataset.editThis;
        if (referency != null) {
            const $el = $.id(referency);
            // const $component_=$el;
            // console.log($component);
            // console.log($component_);
            //console.info($el.__vue_custom_element__.$children[0].sayHello());
            $.id("selected-items").innerHTML += $el.vueComponent.showForm();
            //document.querySelector("my-custom-card").__vue_custom_element__.$children[0].sayHello();
            //$el.__vue_custom_element__.sayHello();
            //console.log($component.shadowRoot.querySelector("[data-attributes]").getAttribute("data-attributes"));
        }

    } catch (error) {
        errorHandle.doCatch(error);
    }
}

function doSave() {
    console.log(123456)
}

function menuComponents(element) {
    let response = '';
    try {
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
        response = `
                    <a data-action='selectable' class="col s6  button is-one-quarter" href="#"
                    data-item-name="${element.name}"
                    ${element.structure}
                    >${element.name}
                    <a/>`;
    } catch (error) {
        errorHandle.doCatch(error);
    }
    return response;
}

function selectComponent(element) {
    let response = ''
    try {
        const uniqid_ = uniqid();
        const dropid_ = uniqid();
        const compId = uniqid();
        response = `        
            <div id="${uniqid_}">
                <p>
                    <a href="#" class="dropdown-trigger btn" data-target='${dropid_}' data-custom="item">custom</a>
                </p>
                <ul id='${dropid_}' class='dropdown-content'>
                  <li><a href="#!" data-edit-this="${compId}">Editar</a></li>
                  <li><a href="#!" data-clone-this="${uniqid_}">Duplicar</a></li>
                  <li><a href="#!" data-delete-this="${uniqid_}">Eliminar</a></li>
                </ul>
                <${element.name} id="${compId}" data-component-item="${element.name}"></${element.name}>
            </div>
            
        `
    } catch (error) {
        errorHandle.doCatch(error);
    }
    return response;
}

function activateMaterial() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    let options = {}
    var instances = M.Dropdown.init(elems, options);
}


export { response }