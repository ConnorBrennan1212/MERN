// ------ callback functions -------

const makingPurchase = (person, price) => {
    console.log(`Processing purchase for ${person}, charged ${price}`);
};

const returningItem = (person, price) => {
    console.log(
        `Processing refund for ${person}, ${price} will be issued at ${person}'s bank account`
    );
};

const parentFunction = (callback, ruben, person, price) => {
    console.log("Welcome to the store, how can I help you? ")
    callback(person, price)
    ruben(person, price)
}

parentFunction(makingPurchase, returningItem, "David", 1000);
// parentFunction(returningItem, "David", 1000)








// ------ Object.freeze() -------
const shoppingList = Object.freeze([
    { id: 3, itemName: "wetfood", price: 1.29, shops: ["petco", "Trader Joes"] },
    { id: 5, itemName: "red gamer chair", price: 300, shops: ["amazon", "Best Buy"],},
    { id: 9, itemName: "soup dumplings", price: 3.29, shops: ["Trader Joes"] },
    { id: 2, itemName: "Air ticket to Japan", price: 1400, shops: ["expedia"] },
    { id: 10, itemName: "custard tart", price: 3.99, shops: ["Trader Joes"] },
]);

// ------ .map & .filter -------
// .map()
// DEMO: return an array of prices
const prices = shoppingList.map((theo) => {
    return theo.itemName + ': ' + theo.price
})
const prices2 = shoppingList.map((t, i) => `${i} : ${t.itemName} ${t.price}`)
console.log(prices)
console.log(prices2)
// NOT RECOMMENDED FOR MAP
const prices3 = shoppingList.map(function(item){
    return item.price
})
console.log(prices3)
// TODO: return a list of item names (write your own code)
// demonstrated in AM session


// .filter()
// DEMO: return a list of cheap items (cheap: price< 100)

// DEMO: return a list of cheap items with only the names

// TODO: given a deleteId, return a list of items without the item of that matching id
// will be demonstrated in PM session (write your own code)


// TODO: given an array index, return a list of items without the item of that index
// will be demonstrated in PM session (write your own code)

// TODO: filter the items that can be bought in Trader Joes
// HINT: .includes(keyword) returns a boolean
// will be demonstrated in PM session (write your own code)