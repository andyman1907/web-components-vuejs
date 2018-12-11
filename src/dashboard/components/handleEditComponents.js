import { messageHandle } from "./messageHandle";
import { selectors as $ } from "../shared/util/selectors";
import toHtml from "string-to-html";
import serialize from "form-serialize-json";
const domRemove = require("dom-remove");
//const uniqid = require("uniqid");

const handleEdit = {
    /**
     * método que se encarga de llamar el form para editar la card
     * @param {Element} $el elemento html que contiene la card
     */
    myCustomCard($el) {
        try {
            const dummy = JSON.parse($el.vueComponent.showDummy()).slot;

            let titleSlot = (data = "") => toHtml(`<div slot="title">${data}</div>`);
            let imageSlot = (data = "") => toHtml(`<div slot="img"><img src="${data}"/></div>`);
            let contentSlot = (data = "") => toHtml(`<div slot="content">${data}</div>`);

            if ($el.querySelector("[slot='title']") == null) $el.appendChild(titleSlot(dummy.title));
            if ($el.querySelector("[slot='img']") == null) $el.appendChild(imageSlot(dummy.img));
            if ($el.querySelector("[slot='content']") == null) $el.appendChild(contentSlot(dummy.content));

            let titleComponent = $el.querySelector("[slot='title']");
            let imageComponent = $el.querySelector("[slot='img'] img");
            let contentComponent = $el.querySelector("[slot='content']");

            const $form = toHtml(
                $el.vueComponent.showForm()
                    .replace(/#target#/, $el.getAttribute("id"))
            );

            const titleForm = $form.querySelector("[name=title]");
            titleForm.value = titleComponent.innerHTML;

            const imageForm = $form.querySelector("[name=img]");
            imageForm.value = imageComponent.getAttribute("src");

            const contentForm = $form.querySelector("[name=content]");
            contentForm.value = contentComponent.innerHTML;

            handleEdit.renderFormContainer($form);
        } catch (error) {
            messageHandle.doCatch(error);
        }
    },
    /**
     * método que se encarga de guardar los cambios en el componente card
     * @param {event} event evento submit del form que contiene el formulario
     * del componente card
     */
    doCard(event) {
        try {
            const arrData = serialize(event.target);
            const $el = $.id(event.target.dataset.toTarget);
            $el.querySelector("[slot='title']").innerHTML = arrData.title;
            $el.querySelector("[slot='img'] img").setAttribute("src", arrData.img);
            $el.querySelector("[slot='content']").innerHTML = arrData.content;
        } catch (error) {
            messageHandle.doCatch(error);
        }
    },
    /**
     * método que se encarga de cargar la interfaz para editar el componente
     * carousell
     * @param {Element} $el elemento html que contiene el carousell
     */
    myCustomCarousell($el) {
        try {
            const dummy = $el.vueComponent.showDummy();
            let jsonData = {};
            const $form = toHtml(
                $el.vueComponent.showForm()
                    .replace(/#target#/, $el.getAttribute("id"))
            );
            if ($el.getAttribute("structure") == null) $el.setAttribute("structure", dummy);
            jsonData = JSON.parse($el.getAttribute("structure"));
            setTimeout(() => {
                $el.vueComponent.getSlides();
            }, 500);

            jsonData.structure.content.forEach((element) => {
                const $item = $form.querySelector(".item").cloneNode(true);
                $item.querySelector("[name=content]").value = element.text;
                $item.querySelector("[name=img]").value = element.url;
                $item.querySelector("[name=state]").checked = element.state;
                $form.querySelector(".dynamic-items").appendChild($item);
            });

            $form.querySelector("[name=title]").value = jsonData.structure.title;

            const $items = $form.querySelectorAll(".item");
            domRemove($items[0]);
            $items[($items.length - 1)].querySelector(".clone-item").classList.toggle("active");

            handleEdit.renderFormContainer($form);
        } catch (error) {
            messageHandle.doCatch(error);
        }
    },
    /**
     * método que se encarga de procesar el formulario de edición del carousell
     * @param {Event} event evento que contiene el submit del formulario carousell
     */
    doCarousell(event) {
        try {
            const arrData = serialize(event.target);
            const $el = $.id(event.target.dataset.toTarget);
            const title = arrData.title;
            const content = [];
            event.target.querySelectorAll(".item").forEach((element, index) => {
                const text = element.querySelector("[name=content]").value;
                const url = element.querySelector("[name=img]").value;
                const state = (index == 0) ? true : false;
                if (url != null && url != "") content.push({ text, url, state });
            });
            const structure = { structure: { title, content } };
            $el.setAttribute("structure", JSON.stringify(structure));
            setTimeout(() => $el.vueComponent.getSlides(), 500);
        } catch (error) {
            messageHandle.doCatch(error);
        }
    },
    /**
     * método que se encarga de cargar la interfaz para editar el componente
     * collapse
     * @param {Element} $el elemento html que contiene el collapse
     */
    myCustomCollapse($el) {
        try {
            const dummy = $el.vueComponent.showDummy();
            let jsonData = {};
            const $form = toHtml(
                $el.vueComponent.showForm()
                    .replace(/#target#/, $el.getAttribute("id"))
            );
            if ($el.getAttribute("structure") == null) $el.setAttribute("structure", dummy);
            jsonData = JSON.parse($el.getAttribute("structure"));
            setTimeout(() => $el.vueComponent.getItems(), 500);
            jsonData.structure.content.forEach((element) => {
                const $item = $form.querySelector(".item").cloneNode(true);
                $item.querySelector("[name=content]").value = element.content;
                $item.querySelector("[name=title]").value = element.title;
                $item.querySelector("[name=state]").checked = element.state;
                $form.querySelector(".dynamic-items").appendChild($item);
            });

            $form.querySelector("[name=title]").value = jsonData.structure.title;
            $form.querySelector("[name=subtitle]").value = jsonData.structure.subtitle;

            const $items = $form.querySelectorAll(".item");
            domRemove($items[0]);
            $items[($items.length - 1)].querySelector(".clone-item").classList.toggle("active");

            handleEdit.renderFormContainer($form);
        } catch (error) {
            messageHandle.doCatch(error);
        }
    },
    /**
     * método que se encarga de procesar el formulario de edición del carousell
     * @param {Event} event evento que contiene el submit del formulario carousell
     */
    doCollapse(event) {
        try {
            const arrData = serialize(event.target);
            const $el = $.id(event.target.dataset.toTarget);
            const title = arrData.title;
            const subtitle = arrData.subtitle;
            const content = [];

            event.target.querySelectorAll(".item").forEach((element, index) => {
                const id = index;
                const content_ = element.querySelector("[name=content]").value;
                const title = element.querySelector("[name=title]").value;
                const state = (index == 0) ? true : false;
                if (title != null && title != "" && content_ != null && content_ != "") content.push({ id,content:content_, title, state });
            });
            const structure = { structure: { title, subtitle, content } };
            $el.setAttribute("structure", JSON.stringify(structure));
            setTimeout(() => $el.vueComponent.getItems(), 500);
        } catch (error) {
            messageHandle.doCatch(error);
        }
    },
    renderFormContainer($form) {
        $.id("form-items").innerHTML = "";
        $.id("form-items").appendChild($form);
    }
};

export { handleEdit };