/**
 * @author Caterina Ilario
 * @GitHub 
 */

import { insertProducts } from "./insertProducts.js"
import { listProducts } from "./listProducts.js"


document.addEventListener("DOMContentLoaded", listProducts);

// Add a new product to the inventory
document.addEventListener("DOMContentLoaded", listProducts)

document.addEventListener("DOMContentLoaded", () => {
    const btnForm = document.getElementById("inventory-form")
    
    btnForm.addEventListener("click", () => {
        insertProducts()
    })

    const searchBtn = document.getElementById("search-btn")

    searchBtn.addEventListener("click", () => {
        const searchInput = document.querySelector("#search-name").value
        
        let findProduct = inventory.find(product => product.name === searchInput)
        console.log(findProduct)
    
    })
})
