import { inventory } from "./products.js"

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
            // Logic to edit specific product
            const modalBox = document.getElementById("modal")
            const closeModal = document.getElementById("btn-close")
            const saveBtn = document.getElementById("btn-save")
           
            modalBox.style.display = "block";

            closeModal.onclick = () =>{
                modalBox.style.display = "none";
            }
    
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

                    alert('Producto actualizado correctamente')
                    modalBox.style.display = 'none'
            })

        });

        cell4.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Borrar";
        deleteButton.classList.add("delete-button")
        
        deleteButton.addEventListener("click", () =>{
            // Logic to delete specific product
            if(confirm(`¿Seguro que seas borrar ${item.name}?`)){
                const index = inventory.findIndex(product => product.id === item.id)
        
                    if (index !== -1) { // If index is not -1, we have a match, so we delete the product
                    inventory.splice(index, 1)
                    } 
                }    
            const cleanTable = document.getElementById("inventory-content")
            cleanTable.innerHTML= "";
            listProducts()
        });

        cell4.appendChild(deleteButton);
    })

}