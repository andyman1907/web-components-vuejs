
import { messageHandle } from "./messageHandle";
import { selectors as $ } from "../shared/util/selectors";
import { handleEdit } from "./handleEditComponents"

const domRemove = require('dom-remove');
const camelCase = require('camelcase');
import { handleMaterialize } from "./handleMaterialize";
import { handleUI } from "./handleUI";


let response = {
    /**
     * método que se encarga de activarle los eventos a los componentes generados
     * dinámicamente
     */
    activateLiveEvents() {
        document.addEventListener("click", function (ev) {
            try {
                response.selectItem(ev);
                response.handleDeleteThis(ev);
                response.handleCloneThis(ev);
                response.handleEditThis(ev);
                response.handleCloneItem(ev);
                response.handleRemoveItem(ev);
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
    selectItem(event) {
        try {
            const referency = event.target.dataset.itemName;
            if (referency != null) {
                const structure = (event.target.dataset.structure != null) ? "data-structure='" + JSON.stringify(event.target.dataset.structure) + "'" : '';
                const componentName = (event.target.dataset.itemName != null) ? event.target.dataset.itemName : null;
                const component = {
                    name: componentName
                }
                const main = $.id("selected-items");
                main.innerHTML += handleUI.selectComponent(component);
                handleMaterialize.activateMaterial();
            }
        } catch (error) {
            messageHandle.doCatch(error);
        }
    },
    /**
     * método que ejecuta la acción cuando se elimina un componente
     * @param {Event} event evento del botón eliminar
     */
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
    /**
     * método que se ejecuta cuando se duplica el componente
     * @param {Event} event evento click
     */
    handleCloneThis(event) {
        try {
            const referency = event.target.dataset.cloneThis;
            if (referency != null) {
                event.preventDefault();
                const $el = $.id(referency);
                setTimeout(() => {
                    const $clone = $el.cloneNode(true);
                    $el.parentNode.appendChild($clone);
                    handleMaterialize.activateMaterial();
                }, 500);
            }
        } catch (error) {
            messageHandle.doCatch(error);
        }
    },
    /**
     * método que gestiona las solicitudes de clonar un item 
     * @param {Event} event evento click del boton clonar
     */
    handleCloneItem(event) {
        try {
            const referency = event.target.dataset.cloneItem;
            const referencyDelete = event.target.dataset.removeItem;
            if (referency != null) {
                event.preventDefault();
                const $el = event.target.parentNode.parentNode;
                const $clone = $el.cloneNode(true);
                event.target.parentNode.classList.toggle("active");
                $el.parentNode.appendChild($clone);
            }
        } catch (error) {
            messageHandle.doCatch(error);
        }
    },
    /**
     * método que gestiona las solicitudes de eliminar un item 
     * @param {Event} event evento click del boton eliminar
     */
    handleRemoveItem(event) {
        try {
            const referency = event.target.dataset.removeItem;
            if (referency != null) {
                event.preventDefault();
                const $el = event.target.parentNode.parentNode;
                domRemove($el);
            }
        } catch (error) {
            messageHandle.doCatch(error);
        }
    },
    /**
     * método que permite editar un componente
     * @param {Evente} event evento click del botón editar componente
     */
    handleEditThis(event) {
        try {
            const referency = event.target.dataset.editThis;
            if (referency != null) {
                const $el = $.id(referency);
                const tagName = $el.tagName.toLowerCase();
                handleEdit[camelCase(tagName)]($el);
                M.AutoInit();
                handleMaterialize.validFillMaterialize();
            }
        } catch (error) {
            messageHandle.doCatch(error);
        }
    },
    /**
     * método que permite gestinar los clicks en la aplicación
     * @param {Event} event evento click 
     */
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
}

export { response }