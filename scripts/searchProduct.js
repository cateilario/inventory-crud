import { inventory } from "./products.js";

export const searchProduct = () => { 
  const searchInput = document.getElementById("search").value
  const foundedModal = document.getElementById("modal-search")
  const modalBody = document.getElementById("modal-body")
  const closeBtn = document.getElementById("close-modal")

  const productFound = inventory.find(item => item.name.toLowerCase() === searchInput.toLowerCase())

  if (productFound){
    foundedModal.style.display = "block"

  } else {
    alert(`Producto no encontrado en el inventario.`)
  }

  closeBtn.addEventListener("click", () => {
    foundedModal.style.display = "none"
    searchInput = "";
  })


}
  