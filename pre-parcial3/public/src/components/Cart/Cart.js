
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.totalPrice = 0; // Mantener el total del carrito
    }

    connectedCallback() {
        this.render();
    }

    // Método para actualizar el total del carrito
    updateCartTotal(price) {
        this.totalPrice += price;
        this.shadowRoot.querySelector('#total-price').textContent = this.totalPrice.toFixed(2);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .cart {
                    margin-top: 20px;
                    font-size: 1.5em;
                }
            </style>
            <section class="app-container">
                <h1>Fruit Shop</h1>
                <product-list></product-list>
                <div class="cart">
                    <h2>Shopping Cart</h2>
                    <p>Total: $<span id="total-price">0.00</span></p>
                </div>
            </section>
        `;
    }
}

customElements.define('app-container', AppContainer);