const axios = require("axios");
import { messageHandle } from "./messageHandle";
import { selectors as $ } from "../shared/util/selectors";
import { handleEdit } from "./handleEditComponents"
const uniqid = require('uniqid');
const domRemove = require('dom-remove');
const camelCase = require('camelcase');


let response = {
    /**
     * método que consulta el json y obtiene el listado de componentes disponibles
     */
    getListComponent: async () => {
        let data = {};
        try {
            data = await axios.get("dist-dashboard/js/components.json");
        } catch (error) {
            messageHandle.doCatch(error);
        }
        return data;
    },
    /**
     * método que se encarga de recorrer los componentes disponibles y genera el menú
     * que se podrá escoger de componentes
     */
    getComponents: async () => {        
        let html = '';
        try {
            const res = await axios.get("js/components.json");
            if (res.data.length > 0) {
                res.data.forEach(element => {                    
                    const structure = (element.structure != null) ? "data-action='" + JSON.stringify(element.structure) + "'" : '';
                    element.structure = structure;
                    html += response.menuComponents(element);
                });
            }
            html = `<div class="row">${html}</div>`;
            return html;
        } catch (error) {
            messageHandle.doCatch(error);
        }
    },
    inspect: () => {
        try {
            response.activateLiveEvents();
        } catch (error) {
            messageHandle.doCatch(error);
        }
    },
    /**
     * método que se encarga de activarle los eventos a los componentes generados
     * dinámicamente
     */
    activateLiveEvents() {
        document.addEventListener("click", function (ev) {
            try {
                (ev.target.dataset["itemName"] != null) ? response.selectable(ev) : '';
                response.handleDeleteThis(ev);
                response.handleCloneThis(ev);
                response.handleEditThis(ev);
            } catch (error) {
                messageHandle.doCatch(error)
            }
        });
        document.addEventListener("submit", function (ev) {
            ev.preventDefault();
            try {
                console.log("evento submit");
                response.handleClick(ev);
            }
            catch (error) {
                messageHandle.doCatch(error);
            }

        })
    },
    /**
     * método que se encarga de agregar el componente elegido al contenedor 
     * donde se podrán personalizar
     * @param {*} event 
     */
    selectable(event) {
        try {
            const structure = (event.target.dataset.structure != null) ? "data-structure='" + JSON.stringify(event.target.dataset.structure) + "'" : '';
            const componentName = (event.target.dataset.itemName != null) ? event.target.dataset.itemName : null;
            const component = {
                name: componentName
            }
            const main = $.id("selected-items");
            main.innerHTML += response.selectComponent(component);
            response.activateMaterial();
        } catch (error) {
            messageHandle.doCatch(error);
        }
    },
    handleDeleteThis(event) {
        try {
            const referency = event.target.dataset.deleteThis;
            if (referency != null) {
                const $el = $.id(referency);
                domRemove($el);
            }

        } catch (error) {
            messageHandle.doCatch(error);
        }
    },
    handleCloneThis(event) {
        try {
            const referency = event.target.dataset.cloneThis;
            if (referency != null) {
                const $el = $.id(referency);
                const $clone = $el.cloneNode(true);
                $el.parentNode.appendChild($clone);
            }

        } catch (error) {
            messageHandle.doCatch(error);
        }
    },
    handleEditThis(event) {
        try {
            const referency = event.target.dataset.editThis;
            if (referency != null) {
                const $el = $.id(referency);
                const tagName = $el.tagName.toLowerCase();
                handleEdit[camelCase(tagName)]($el);
                M.AutoInit();
            }
        } catch (error) {
            messageHandle.doCatch(error);
        }
    },
    handleClick(event) {
        try {
            messageHandle.doMessage("evento click");
            if (event.target.dataset.submitAction != null) {
                const methodName = event.target.dataset.submitAction;
                handleEdit[methodName](event);
            }
        }
        catch (error) {
            messageHandle.doCatch(error);
        }
    },
    doSave() {
        messageHandle.doMessage(123456)
    },
    menuComponents(element) {
        let response = '';
        try {
            response = `
                        <a data-action='selectable' class="col s6  button is-one-quarter" href="#"
                        data-item-name="${element.name}"
                        ${element.structure}
                        >${element.name}
                        <a/>`;
        } catch (error) {
            messageHandle.doCatch(error);
        }
        return response;
    },
    selectComponent(element) {
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
                    <${element.name} 
                    id="${compId}" 
                    data-component-item="${element.name}"
                    
                    >
                    </${element.name}>
                </div>
            `
        } catch (error) {
            messageHandle.doCatch(error);
        }
        return response;
    },
    activateMaterial() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        let options = {}
        var instances = M.Dropdown.init(elems, options);
    }    
}

export { response }