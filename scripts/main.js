/**
 * @author Caterina Ilario
 * @GitHub 
 */

import { insertProducts } from "./insertProducts.js"
import { listProducts } from "./listProducts.js"
import { searchProduct } from "./searchProduct.js"

// Add a new product to the inventory
document.addEventListener("DOMContentLoaded", listProducts)

document.addEventListener("DOMContentLoaded", () => {
    const btnForm = document.getElementById("inventory-form")
    
    btnForm.addEventListener("click", () => {
        insertProducts()
    })

    const searchBtn = document.getElementById("search-btn")

    searchBtn.addEventListener("click", () => {
        searchProduct()
    })
})
