import { inventory } from "./products.js"
import { deleteProduct } from "./deleteProduct.js"

export const listProducts = () => {

    const cleanTable = document.getElementById("inventory-content")
    
    inventory.forEach(item => {

        const row = cleanTable.insertRow()

        const cell1 = row.insertCell(0)
        const cell2 = row.insertCell(1)
        const cell3 = row.insertCell(2)
        const cell4 = row.insertCell(3)

        cell1.innerText = item.name;
        cell2.innerText = item.amount;
        cell3.innerText = `${item.price}€`;

        const editButton = document.createElement("button");
        editButton.innerText = "Editar";
        editButton.classList.add("edit-button")

        editButton.addEventListener("click", () =>{
            
            const modalBox = document.getElementById("modal")
            const closeModal = document.getElementById("btn-close")
            const saveBtn = document.getElementById("btn-save")
           
            modalBox.style.display = "block";

            closeModal.addEventListener("click", () =>{
                modalBox.style.display = "none";
            })
    
            saveBtn.addEventListener("click", () =>{

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

        });

        cell4.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Borrar";
        deleteButton.classList.add("delete-button")
        
        deleteButton.addEventListener("click", () =>{
            deleteProduct(item)
        });

        cell4.appendChild(deleteButton);
    })

}