import { inventory } from "./products";
import { listProducts } from "./listProducts";

export const editProduct = (productId) => {
    const index = inventory.find(product => product.id === item.id)

    const modalBox = document.getElementById("modal")
    const closeModal = document.getElementById("btn-close")
    const saveBtn = document.getElementById("btn-save")
           
    modalBox.style.display = "block";

        closeModal.addEventListener("click", () => {
            modalBox.style.display = "none";
        })
    
        saveBtn.addEventListener("click", () => {
            const newName = document.getElementById("name-edit").value
            const newQuantity = parseInt(document.getElementById("quantity-edit").value)
            const newPrice = parseFloat(document.getElementById("price-edit").value).toFixed(2)
    
                item.name = newName
                item.amount = newQuantity
                item.price = newPrice

                cell1.innerHTML = newName
                cell2.innerHTML = newQuantity
                cell3.innerHTML = `${newPrice}€`

                modalBox.style.display = 'none'
        })
}