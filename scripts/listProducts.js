import {inventory} from "./products.js"

export const listProducts = () => {

    const table = document.getElementById("inventory-table")
    
    inventory.forEach(item => {
        const row = table.insertRow()

        const cell1 = row.insertCell(0)
        const cell2 = row.insertCell(1)
        const cell3 = row.insertCell(2)
        const cell4 = row.insertCell(3)

        cell1.innerText = item.name;
        cell2.innerText = item.amount;
        cell3.innerText = item.price;

        const deleteButton = document.createElement("button");
            deleteButton.innerText = "Borrar";
        deleteButton.addEventListener("click", () =>{
            //Logic to delete specific product
        });

        cell4.appendChild(deleteButton);

        const editButton = document.createElement("button");
            editButton.innerText = "Editar";
        editButton.addEventListener("click", () =>{
            //Logic to delete specific product
        });

        cell4.appendChild(editButton);

    })

}