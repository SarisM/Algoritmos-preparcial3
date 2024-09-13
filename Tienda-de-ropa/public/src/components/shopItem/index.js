
//primer creamos la clase
class ShopItem extends HTMLElement {
    constructor () {
        super()
        this.attachShadow ({ mode: 'open' });

    }

    connectedCallback() {
        this.render()
    }


    static get observedAttributes(){
        return ['id', 'name', 'description', 'price']
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this.render()
        if (oldValue !== newValue) {
            this[propName] = newValue
            this.render()
        }
    }



    render(){
        this.shadowRoot.innerHTML = `
        <li>
            <h3>${this.name}</h3>
            <h2>${this.id}</h2>
            <p>${this.description}</p>
            <p>${this.price}</p>


        </li>
        `
      


    }
}

    customElements.define('shop-item', ShopItem)

    export default ShopItem









