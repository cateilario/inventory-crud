export { inventory }

// Function to obtain random quantity
const getRandomQuantity = () =>{
    return Math.floor(Math.random()* 13) +1;
}

const getRandomPrice = () => {
    return (Math.random() * 100 + 1).toFixed(2)
}

// Initial list of products: objet array
const inventory = [
    {id: 1, name: "Manzana Gran Smith", amount: getRandomQuantity(), price: getRandomPrice()},
    {id: 2, name: "Manzana Golden", amount: getRandomQuantity(), price: getRandomPrice()},
    {id: 3, name: "Piña", amount: getRandomQuantity(), price: getRandomPrice()},
    {id: 4, name: "Naranja", amount: getRandomQuantity(), price: getRandomPrice()},
    {id: 5, name: "Melocotón", amount: getRandomQuantity(), price: getRandomPrice()},
    {id: 6, name: "Pera", amount: getRandomQuantity(), price: getRandomPrice()},
    {id: 7, name: "Mandarina", amount: getRandomQuantity(), price: getRandomPrice()},
    {id: 8, name: "Kiwi", amount: getRandomQuantity(), price: getRandomPrice()},
    {id: 9, name: "Limón", amount: getRandomQuantity(), price: getRandomPrice()},
    {id: 10, name: "Aguacate", amount: getRandomQuantity(), price: getRandomPrice()},
    {id: 11, name: "Plátano", amount: getRandomQuantity(), price: getRandomPrice()},
    {id: 12, name: "Melón", amount: getRandomQuantity(), price: getRandomPrice()},
    {id: 13, name: "Fresa", amount: getRandomQuantity(), price: getRandomPrice()},
    {id: 14, name: "Cereza", amount: getRandomQuantity(), price: getRandomPrice()},
    {id: 15, name: "Melón", amount: getRandomQuantity(), price: getRandomPrice()},
    {id: 16, name: "Sandía", amount: getRandomQuantity(), price: getRandomPrice()},
];


