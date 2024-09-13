class ProductItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Obtenemos los atributos del producto
        const name = this.getAttribute('name');
        const price = this.getAttribute('price');
        this.render(name, price);
    }

    render(name, price) {
        // Renderizamos el producto con nombre, precio y un botón para añadir
        this.shadowRoot.innerHTML = `
            <div class="product-item">
                <p>${name}</p>
                <p>Price: $${price}</p>
                <button>Add to cart</button>
            </div>
        `;

        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            const event = new CustomEvent('add-to-cart', {
                detail: { name, price: parseFloat(price) },
                bubbles: true
            });
            this.dispatchEvent(event); // Disparamos un evento personalizado para añadir al carrito
        });
    }
}

customElements.define('product-item', ProductItem);
