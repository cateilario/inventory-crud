import { inventory } from "./products.js"
import { deleteProduct } from "./deleteProduct.js"
import { editProduct } from "./editProduct.js"

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

        editButton.addEventListener("click", () => {
            editProduct(item.id)
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