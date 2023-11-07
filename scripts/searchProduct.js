import { inventory } from "./products.js";
import { editProduct } from "./editProduct.js";
import { deleteProduct } from "./deleteProduct.js";

export const searchProduct = () => { 
  const searchInput = document.getElementById("search")
  const foundedModal = document.getElementById("modal-search")
  const modalBody = document.getElementById("modal-body")
  const deleteBtn = document.getElementById("btn-delete")
  const openEditModal = document.getElementById("btn-edit")

  const productFounded = inventory.find(item => item.name.toLowerCase() === searchInput.value.toLowerCase())

  if (!productFounded){
    alert(`No hay coincidencias en el inventario.`)
    searchInput.value = "";
    return
  }

  foundedModal.style.display = "block"
  console.log(productFounded)

  openEditModal.addEventListener("click", () =>{
    foundedModal.style.display = "none";
    editProduct(productFounded.id)
    searchInput.value = ""
  })

  deleteBtn.addEventListener("click", () => {
    deleteProduct(productFounded)
    foundedModal.style.display = "none"
    searchInput.value = "";
  })
    

}
  