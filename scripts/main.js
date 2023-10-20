/**
 * @author Caterina Ilario
 * @GitHub 
 */

import {listProducts} from "./listProducts.js"
import {inventory} from "./products.js";

document.addEventListener("DOMContentLoaded", listProducts);

const addProduct = document.getElementById("add-product");
const table = document.getElementById("inventory-table")
// Add a new product to the inventory

addProduct.addEventListener("click", () =>{

    const productName = document.getElementById("product-name").value;
    const productPrice = parseFloat(document.getElementById("product-price").value).toFixed(2);
    const productQuantity = parseInt(document.getElementById("product-quantity").value);
    
    if ((productName === "") || isNaN(productPrice) || isNaN(productQuantity)){
        alert('Para añadir un producto, rellene todos los campos');
    } else{
        
    let newProduct = {
        name: productName,
        amount: productQuantity,
        price: productPrice,
    }

    inventory.unshift(newProduct);

    let newRow = `
    <tr>
        <td>${newProduct.name}</td>
        <td>${newProduct.amount}</td>
        <td>${newProduct.price}</td>
    </tr>`

    table.innerHTML += newRow;
    }

    document.querySelector("#products-form").reset()

});
