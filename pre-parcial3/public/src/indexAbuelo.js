import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // Estructura principal que incluye la lista de productos y el carrito
        this.shadowRoot.innerHTML = `
            <section class="app-container">
                <h1>Fruit Shop</h1>
                <product-list></product-list>
                <shopping-cart></shopping-cart>
            </section>
        `;
    }
}

customElements.define('app-container', AppContainer);
