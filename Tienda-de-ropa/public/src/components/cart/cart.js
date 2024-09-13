class ShopCart extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.quantity = 0;  // Inicializamos la cantidad en 0
    }

    static get observedAttributes() {
        return ['id', 'name', 'description', 'price', 'quantity'];
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[propName] = newValue;
            this.render();
        }
    }

    // Método para eliminar el producto del carrito
    deleteClothe() {
        this.remove();
    }

    // Método para incrementar la cantidad
    incraseCount() {
        this.quantity++;
        this.setAttribute('quantity', this.quantity);  // Actualizamos el atributo
    }

    // Método para disminuir la cantidad
    decraseCount() {
        if (this.quantity > 0) {
            this.quantity--;
            this.setAttribute('quantity', this.quantity);  // Actualizamos el atributo
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
        <li>
            <h3>${this.name}</h3>
            <p>${this.description}</p>
            <p>Price: $${this.price}</p>
            <p>Quantity: ${this.quantity}</p>
            <button class="increase">Increase</button>
            <button class="decrease">Decrease</button>
            <button class="delete-clothe">Eliminar</button>
        </li>
        `;

        // Botones de aumentar, disminuir y eliminar
        this.shadowRoot.querySelector('.increase').addEventListener('click', () => this.incraseCount());
        this.shadowRoot.querySelector('.decrease').addEventListener('click', () => this.decraseCount());
        this.shadowRoot.querySelector('.delete-clothe').addEventListener('click', () => this.deleteClothe());
    }
}

customElements.define('cart-container', ShopCart);
export default ShopCart;
