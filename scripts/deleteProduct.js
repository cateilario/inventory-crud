import { inventory } from "./products.js"
import { listProducts } from "./listProducts.js"

export const deleteProduct = (item) => {

    if(confirm(`¿Seguro que seas borrar ${item.name}?`)) {
        const index = inventory.findIndex(product => product.id === item.id)

            if (index !== -1) { // If index is not -1, we have a match, so we delete the product
            inventory.splice(index, 1)
            } 
    }    
    const cleanTable = document.getElementById("inventory-content")
    cleanTable.innerHTML= "";
    listProducts()

}