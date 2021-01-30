let marketEnv = {
    persons: [],

}

class person {
    constructor(index) {
        this.index = index;
        this.randomWealth = 1 + Math.random() * 10;
        this.products = Math.floor(this.randomWealth) * Math.floor(Math.random() * 10) + 1;
        this.money = 10 * this.randomWealth * Math.random() * 10;
        this.productCost = (this.money / this.products) * Math.random();
        this.status = {'bought': false, 'sold': false};
        this.statistics = {'spend': 0, 'earned': 0}
    };
};

function marketInit(personCount) {
    for (let i = 0; i < personCount; i++) {
        newPerson = new person(i);
        marketEnv.persons.push(newPerson);
        console.log(newPerson)
    };
};


function market() {
    for (let i = 0; i < marketEnv.persons.length; i++) {

    };
}

function cheapestSeller() {
    let searchIndex = 0;
    const prices = marketEnv.persons.map(({ productCost }) => productCost);
    prices.sort();
    let seller;
    console.log(searchIndex)
    function findSellerId(price) {
        console.log(searchIndex)
        seller = marketEnv.persons.find( ({ productCost }) => productCost == price)
    }
    findSellerId(prices[searchIndex])
    if (seller.status.bought == true) { searchIndex += 1; console.log('new'+searchIndex); findSellerId(prices[searchIndex]) }
    else { return seller.index }
}