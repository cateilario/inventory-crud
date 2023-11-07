import { inventory } from "./products.js";
import { editProduct } from "./editProduct.js";
import { deleteProduct } from "./deleteProduct.js";

export const searchProduct = () => { 
  const searchInput = document.getElementById("search")
  const foundedModal = document.getElementById("modal-search")
  const modalContent = document.getElementById("founded-product")
  const deleteBtn = document.getElementById("btn-delete")
  const openEditModal = document.getElementById("btn-edit")
  const closeModalBtn = document.getElementById("close-modal")

  const productFounded = inventory.find(item => item.name.toLowerCase() === searchInput.value.toLowerCase())

  if (!productFounded){
    alert(`No hay coincidencias en el inventario.`)
    searchInput.value = "";
    return
  }

  foundedModal.style.display = "block";
  console.log(productFounded)
  modalContent.innerHTML = `<p><strong>Producto:</strong> <br> ${productFounded.name}</p> 
                            <p><strong>Stock:</strong>  <br> ${productFounded.amount} uds</p>  
                            <p><strong>Precio:</strong> <br>${productFounded.price}€</p>`
  
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

 closeModalBtn.addEventListener("click", () =>{
  foundedModal.style.display = "none"
  searchInput.value = "";
 })
    
}
  