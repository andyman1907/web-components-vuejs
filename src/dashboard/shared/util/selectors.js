const selectors = {
    id: document.getElementById.bind(document),
    q: document.querySelector.bind(document),
    all: document.querySelectorAll.bind(document)
};

export { selectors };