import { messageHandle } from "./messageHandle";
import { selectors as $ } from "../shared/util/selectors";
let handleMaterialize = {
    activateMaterial() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        let options = {}
        var instances = M.Dropdown.init(elems, options);

        M.AutoInit();
    },
    /**
     * método que se encarga de activar los input que están diligenciados
     * es por un bug de materializecss que no permite que el placeholder
     * se active correctamente.
     */
    validFillMaterialize() {
        setTimeout(() => {
            try {
                $.id("form-items").querySelectorAll("input").forEach(t => (t.value != null && t.value != '') ? (t.parentNode.querySelector("label") != null) ? t.parentNode.querySelector("label").classList.add("active") : '' : '')
            } catch (error) {
                messageHandle.doCatch(error);
            }
        }, 1000);
    }
}

export { handleMaterialize }