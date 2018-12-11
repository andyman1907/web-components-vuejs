const axios = require("axios");
const uniqid = require('uniqid');
import { messageHandle } from "./messageHandle";
let handleUI={
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
                    html += handleUI.menuComponents(element);
                });
            }
            html = `<div class="row">${html}</div>`;
            return html;
        } catch (error) {
            messageHandle.doCatch(error);
        }
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
}

export {handleUI}