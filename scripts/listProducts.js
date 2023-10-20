import {inventory} from "./products.js"

export const listProducts = () => {

    const table = document.getElementById("inventory-table")
    
    inventory.forEach(item=> {
        const row = table.insertCell()

        const cell1 = table.insertCell(0)
        const cell2 = table.insertCell(1)
        const cell3 = table.insertCell(2)
        const cell4 = table.insertCell(3)

        cell1.innerHTML = item.name;
        cell2.innerHTML = item.amount;
        cell3.innerHTML = item.price;

        const deleteButton = document.createElement("button");
            deleteButton.innerText = "Borrar";
        deleteButton.addEventListener("click", () =>{
            //Logic to delete specific product
        });

        cell4.appendChild(deleteButton);

        const editButton = document.createElement("button");
            editButtonButton.innerText = "Borrar";
        editButton.addEventListener("click", () =>{
            //Logic to delete specific product
        });

        cell4.appendChild(editButton);

    })

}