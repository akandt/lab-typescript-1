interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    {
        name: 'Kilimanjaro',
        height: 19341
    },
    {
        name: 'Everest',
        height: 29029
    },
    {
        name: 'Denali',
        height: 20310
    }
]

const findNameOfTallestMountain = (array) => {
    let heightArray = [];
    for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
        heightArray.push(array[arrayIndex].height);
    }
    let highestNumber = Math.max.apply(null, heightArray);
    let highestMt = mountains.find(mountain => mountain.height === highestNumber)
    return highestMt.name;
}

// console.log(findNameOfTallestMountain(mountains));



interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    {
        name: 'soap',
        price: 4
    },
    {
        name: 'sponge',
        price: 2.50
    },
    {
        name: 'pillow',
        price: 12
    }
]

const calcAverageProductPrice = (array) => {
    let priceArray = [];
    for (let productIndex = 0; productIndex < array.length; productIndex++) {
        priceArray.push(array[productIndex].price);
    }
    let avgNumber = priceArray.reduce((a, b) => a + b, 0) / priceArray.length;
    return avgNumber.toFixed(2);
}

// console.log(calcAverageProductPrice(products));



interface InventoryItem {
    product: Product;
    quantity: number;
}

const inventory: InventoryItem[] = [
    {
        product: {
            name: 'motor',
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: 'sensor',
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: 'LED',
            price: 1.00
        },
        quantity: 20
    }
]

const calcInventoryValue = (array) => {
    let invValueArray = [];
    for (let invIndex = 0; invIndex < array.length; invIndex++) {
        invValueArray.push(array[invIndex].product.price * array[invIndex].quantity);
    }
    let invTotal = invValueArray.reduce((a, b) => a + b, 0);
    return invTotal;
}

// console.log(calcInventoryValue(inventory));