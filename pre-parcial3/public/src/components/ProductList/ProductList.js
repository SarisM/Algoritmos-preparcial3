
class ProductList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.products = [
            { name: "Apple", price: 1 },
            { name: "Banana", price: 2 },
            { name: "Orange", price: 3 }
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <div class="product-list">
                ${this.products.map(product => `
                    <div class="product-item">
                        <h3>${product.name}</h3>
                        <p>Price: $${product.price}</p>
                        <button class="add-to-cart">Add to cart</button>
                    </div>
                `).join('')}
            </div>
        `;

        this.shadowRoot.querySelectorAll('.add-to-cart').forEach((button, index) => {
            button.addEventListener('click', () => {
                // Llama al método `updateCartTotal` del componente `app-container`
                const appContainer = document.querySelector('app-container');
                appContainer.updateCartTotal(this.products[index].price);
            });
        });
    }
}

customElements.define('product-list', ProductList);