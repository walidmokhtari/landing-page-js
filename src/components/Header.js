class Header extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <p>This is a header</p>
            </header>
        `
    }
}

customElements.define('header-component', Header);
