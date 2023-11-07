import { inventory } from "./products.js";
import { listProducts } from "./listProducts.js";

export const editProduct = (productId) => {
    const product = inventory.find(item => item.id === productId)

    if(product){
    const modalBox = document.getElementById("modal")
    const closeModal = document.getElementById("btn-close")
    const saveBtn = document.getElementById("btn-save")
    const newNameInput = document.getElementById("name-edit")
    const newQuantityInput = document.getElementById("quantity-edit")
    const newPriceInput = document.getElementById("price-edit")
    
    modalBox.style.display = "block";

    closeModal.addEventListener("click", () => {
        modalBox.style.display = "none";
    })
    
    newNameInput.value = product.name;
    
    saveBtn.addEventListener("click", () => {
        product.name = newNameInput.value
        product.amount = parseInt(newQuantityInput.value)
        product.price = parseFloat(newPriceInput.value).toFixed(2)

        const cleanTable = document.getElementById("inventory-content")
        cleanTable.innerHTML = "";
        listProducts()
        modalBox.style.display = 'none'

        newQuantityInput.value = "";
        newPriceInput.value = "";
    })

    }
}