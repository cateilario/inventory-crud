export {inventory}

// Function to obtain random quantity
const getRandomQuantity = () =>{
    return Math.floor(Math.random()* 15) +1;
}

// Initial list of products: objet array
const inventory = [
    {id: 1, name: "Gran Smith Apples", amount:getRandomQuantity(), price: 40},
    {id: 2, name: "Canary Bananas", amount: getRandomQuantity(), price: 30},
    {id: 3, name: "Pineapples", amount: getRandomQuantity(), price: 20},
    {id: 4, name: "Oranges", amount: getRandomQuantity(), price: 50},
    {id: 5, name: "Peaches", amount: getRandomQuantity(), price: 30},
    {id: 6, name: "Pears", amount: getRandomQuantity(), price: 15},
    {id: 7, name: "Mandarins", amount: getRandomQuantity(), price: 35},
    {id: 8, name: "Kiwis", amount: getRandomQuantity(), price: 50},
    {id: 9, name: "Cinnamons", amount: getRandomQuantity(), price: 15},
]

