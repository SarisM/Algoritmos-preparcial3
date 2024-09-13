import { clothingProducts } from '../../data/products.js';
import ShopItem from '../shopItem/index.js';
import ShopCart from '../cart/cart.js';

class ShopList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.products = [];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // Función para añadir producto al carrito
        const addProduct = (id) => {
            const productoAñadido = clothingProducts.find(element => element.id === id);
            
            // Crear un nuevo elemento de tipo `cart-container`
            const cartItem = document.createElement('cart-container');
            cartItem.setAttribute('id', productoAñadido.id);
            cartItem.setAttribute('name', productoAñadido.name);
            cartItem.setAttribute('description', productoAñadido.description);
            cartItem.setAttribute('price', productoAñadido.price);
            cartItem.setAttribute('quantity', 0);  // Comenzamos con cantidad 0

            // Añadir al contenedor del carrito
            const container = this.shadowRoot.querySelector('.cart-container');
            container?.appendChild(cartItem);
        };

        // Render de los productos
        this.shadowRoot.innerHTML = `
            <h1>Products</h1>
            <ul class="product-list"></ul>
            <h2>Cart</h2>
            <ul class="cart-container"></ul>
        `;

        const productList = this.shadowRoot.querySelector('.product-list');

        clothingProducts.forEach((element) => {
            const productHtml = document.createElement('li');
            productHtml.innerHTML = `
                <shop-item
                    id="${element.id}"
                    name="${element.name}"
                    description="${element.description}"
                    price="${element.price}">
                </shop-item>
                <button class='btnAdd'>Add product</button>
            `;

            // Escuchar el botón de "Add product"
            const button = productHtml.querySelector('.btnAdd');
            button.addEventListener('click', () => addProduct(element.id));

            productList.appendChild(productHtml);
        });
    }
}

customElements.define('shop-list', ShopList);
export default ShopList;
