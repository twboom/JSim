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
        this.status = {'bought': false, 'sold': true};
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
    const prices = marketEnv.persons.map(({ productCost }) => productCost);
    prices.sort();
    const seller = marketEnv.persons.find( ({ productCost }) => productCost == prices[0])
    return seller.index
}