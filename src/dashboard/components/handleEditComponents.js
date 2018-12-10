
import { messageHandle } from "./messageHandle";
import { selectors as $ } from "../shared/util/selectors";
import toHtml from 'string-to-html';
import serialize from 'form-serialize-json';


const handleEdit = {
    myCustomCard($el) {
        try {
            const dummy = JSON.parse($el.vueComponent.showDummy()).slot;

            let titleSlot = (data = '') => toHtml(`<div slot="title">${data}</div>`);
            let imageSlot = (data = '') => toHtml(`<div slot="img"><img src="${data}"/></div>`);
            let contentSlot = (data = '') => toHtml(`<div slot="content">${data}</div>`);

            ($el.querySelector("[slot='title']") == null)
                ? $el.appendChild(titleSlot(dummy.title)) : '';
            ($el.querySelector("[slot='img']") == null)
                ? $el.appendChild(imageSlot(dummy.img)) : '';
            ($el.querySelector("[slot='content']") == null)
                ? $el.appendChild(contentSlot(dummy.content)) : '';

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
    doCard(event) {
        try {
            const arrData = serialize(event.target);
            const $el = $.id(event.target.dataset.toTarget);
            let titleComponent = $el.querySelector("[slot='title']").innerHTML = arrData.title;
            let imageComponent = $el.querySelector("[slot='img'] img").setAttribute("src", arrData.img);
            let contentComponent = $el.querySelector("[slot='content']").innerHTML = arrData.content;
        } catch (error) {
            messageHandle.doCatch(error)
        }
    },
    myCustomCarousell($el) {
        try {
            const dummy = JSON.parse($el.vueComponent.showDummy());
            console.log(dummy);

            const newDummy = {
                structure: {
                    title: 'hola dinámico',
                    content: [
                        {
                            id: "8",
                            url: "https://picsum.photos/200/300/?gravity=east",
                            text: "dinámico 77",
                            state: true
                        },
                        {
                            id: "9",
                            url: "https://picsum.photos/200/300?image=0",
                            text: "dinámico 222",
                            state: false
                        },
                        {
                            id: "10",
                            url: "https://picsum.photos/200/300",
                            text: "dinámico 333",
                            state: false
                        },
                    ]
                }
            }
            console.log(newDummy);
            // dummy.content.forEach(element => {
            //     //console.log(element);
            // });

            $el.setAttribute("structure", JSON.stringify(newDummy));
            setTimeout(() => {
                $el.vueComponent.getSlides();
            }, 500);


            // let titleSlot = (data = '') => toHtml(`<div slot="title">${data}</div>`);
            // let imageSlot = (data = '') => toHtml(`<div slot="img"><img src="${data}"/></div>`);
            // let contentSlot = (data = '') => toHtml(`<div slot="content">${data}</div>`);

            // ($el.querySelector("[slot='title']") == null)
            //     ? $el.appendChild(titleSlot(dummy.title)) : '';
            // ($el.querySelector("[slot='img']") == null)
            //     ? $el.appendChild(imageSlot(dummy.img)) : '';
            // ($el.querySelector("[slot='content']") == null)
            //     ? $el.appendChild(contentSlot(dummy.content)) : '';

            // let titleComponent = $el.querySelector("[slot='title']");
            // let imageComponent = $el.querySelector("[slot='img'] img");
            // let contentComponent = $el.querySelector("[slot='content']");

            const $form = toHtml(
                $el.vueComponent.showForm()
                    .replace(/#target#/, $el.getAttribute("id"))
            );

            // const titleForm = $form.querySelector("[name=title]");
            // titleForm.value = titleComponent.innerHTML;

            // const imageForm = $form.querySelector("[name=img]");
            // imageForm.value = imageComponent.getAttribute("src");

            // const contentForm = $form.querySelector("[name=content]");
            // contentForm.value = contentComponent.innerHTML;

            handleEdit.renderFormContainer($form);
        } catch (error) {
            messageHandle.doCatch(error);
        }
    },
    doCarousell(event) {

    },
    renderFormContainer($form) {
        $.id("form-items").innerHTML = '';
        $.id("form-items").appendChild($form);
    }
}

export { handleEdit }