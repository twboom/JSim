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

function cheapestSeller(newIndex, buyer) {
    let searchIndex = 0;
    if (newIndex !== undefined) { searchIndex += newIndex }
    const prices = marketEnv.persons.map(({ productCost }) => productCost);
    prices.sort();
    let seller;
    console.log(searchIndex)
    function findSellerId(price) {
        console.log(searchIndex)
        seller = marketEnv.persons.find( ({ productCost }) => productCost == price)
    }
    findSellerId(prices[searchIndex])
    if (seller.products === 0 || buyer.money < seller.productCost) { searchIndex += 1; cheapestSeller(searchIndex)}
    else { console.log('def'+seller.index); return seller }
}

function transaction(buyer, seller) {
    buyer.money -= seller.productCost;
    seller.money += seller.productCost;
    buyer.products += 1;
    seller.products -= 1;
}