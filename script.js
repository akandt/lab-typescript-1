var mountains = [
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
];
var findNameOfTallestMountain = function (array) {
    var heightArray = [];
    for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
        heightArray.push(array[arrayIndex].height);
    }
    var highestNumber = Math.max.apply(null, heightArray);
    var highestMt = mountains.find(function (mountain) { return mountain.height === highestNumber; });
    return highestMt.name;
};
var products = [
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
];
var calcAverageProductPrice = function (array) {
    var priceArray = [];
    for (var productIndex = 0; productIndex < array.length; productIndex++) {
        priceArray.push(array[productIndex].price);
    }
    var avgNumber = priceArray.reduce(function (a, b) { return a + b; }, 0) / priceArray.length;
    return avgNumber.toFixed(2);
};
var inventory = [
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
];
var calcInventoryValue = function (array) {
    var invValueArray = [];
    for (var invIndex = 0; invIndex < array.length; invIndex++) {
        invValueArray.push(array[invIndex].product.price * array[invIndex].quantity);
    }
    var invTotal = invValueArray.reduce(function (a, b) { return a + b; }, 0);
    return invTotal;
};
// console.log(calcInventoryValue(inventory));
