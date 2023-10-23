/**
 * @author Caterina Ilario
 * @GitHub 
 */

import { insertProducts } from "./insertProducts.js"
import { listProducts } from "./listProducts.js"
//import {inventory} from "./products.js";


document.addEventListener("DOMContentLoaded", listProducts);


//const table = document.getElementById("inventory-table")

// Add a new product to the inventory
document.addEventListener("DOMContentLoaded", listProducts)

document.addEventListener("DOMContentLoaded", () => {
    const btnForm = document.getElementById("inventory-form")
    

    btnForm.addEventListener("click", () => {
        insertProducts()
    })

    
})
