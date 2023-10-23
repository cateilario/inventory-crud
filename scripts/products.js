export { inventory }

// Function to obtain random quantity
const getRandomQuantity = () =>{
    return Math.floor(Math.random()* 13) +1;
}

// Initial list of products: objet array
const inventory = [
    {id: 1, name: "Manzana Gran Smith", amount: getRandomQuantity(), price: 40},
    {id: 2, name: "Manzana Golden", amount: getRandomQuantity(), price: 30},
    {id: 3, name: "Piña", amount: getRandomQuantity(), price: 20},
    {id: 4, name: "Naranja", amount: getRandomQuantity(), price: 50},
    {id: 5, name: "Melocotón", amount: getRandomQuantity(), price: 30},
    {id: 6, name: "Pera", amount: getRandomQuantity(), price: 15},
    {id: 7, name: "Mandarina", amount: getRandomQuantity(), price: 35},
    {id: 8, name: "Kiwi", amount: getRandomQuantity(), price: 50},
    {id: 9, name: "Limón", amount: getRandomQuantity(), price: 15},
    {id: 10, name: "Aguacate", amount: getRandomQuantity(), price: 15},
    {id: 11, name: "Plátano", amount: getRandomQuantity(), price: 15},
    {id: 12, name: "Melón", amount: getRandomQuantity(), price: 15},
    {id: 13, name: "Fresa", amount: getRandomQuantity(), price: 15},

];


