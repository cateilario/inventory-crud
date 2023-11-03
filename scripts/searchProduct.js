import { inventory } from "./products.js";

export const searchProduct = () => { 
  const searchInput = document.getElementById("search").value
  const foundedModal = document.getElementById("modal-search")
  const modalBody = document.getElementById("modal-body")
  const modalClose = document.getElementById("close-modal")

  const findProdubtByName = (name) => {
    return inventory.find(product => product.name === searchInput)
  }

  const productFound = findProdubtByName(searchInput)

  if (productFound){
    foundedModal.style.display = "block"
    modalBody.innerHTML = `<p>Producto: ${product.name}</p> 
    <p>Producto: ${product.amount}</p> 
    <p>Producto: ${product.price}</p> `

  } else {
    alert(`Producto no encontrado en el inventario.`)
  }

  modalClose.addEventListener("click", () => {
    foundedModal.style.display = "none"
  })


}
  