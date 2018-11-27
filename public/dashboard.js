const components = [
    { "name": "my-custom-collapse" },
    { "name": "my-custom-card" },
    { "name": "my-custom-carousell" },
    { "name": "my-custom-modal" },
    { "name": "my-custom-sidenav" },
    { "name": "my-custom-tabs" },
    { "name": "my-custom-video" },
    { "name": "my-custom-navbar-dropdown" },
    { "name": "my-custom-grid" }
];

const id_ = document.getElementById.bind(document);
const q_ = document.querySelector.bind(document);
const all_ = document.querySelectorAll.bind(document);
const class_ = document.getElementsByClassName.bind(document);

function renderComponents() {
    const selector = class_("componentList");
    let auto = '';
    components.forEach(element => {
        auto += `<li><a href="#" data-tag="${element.name}" class="choose">${element.name}</a></li>`
    });
    selector[0].innerHTML = auto;
}
renderComponents();

const selectors = all_(".choose");

for (let i = 0; i < selectors.length; i++) {
    const element = selectors[i];
    element.addEventListener("click", function () {
        const tagBuild = `<p><${this.getAttribute("data-tag")} class="comp" /></p>`;
        id_("selectorContainer").innerHTML += tagBuild;
    });
}
