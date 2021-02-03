let marketEnv = {
    persons: [],
    round: 0
}

class person {
    constructor(index) {
        this.index = index;
        this.randomWealth = 1 + Math.random() * 10;
        this.products = Math.floor(this.randomWealth) * Math.floor(Math.random() * 10) + 1;
        this.money = 10 * this.randomWealth * Math.random() * 10;
        this.productCost = (this.money / this.products) * Math.random();
        this.statistics = {'spend': 0, 'earned': 0, 'bought': 0, 'sold': 0};
        this.statistics.transactions = this.statistics.bought + this.statistics.sold; 
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
        let seller = cheapestSeller(0, marketEnv.persons[i])
        transaction(marketEnv.persons[i], seller)
    };
    console.log('MARKET: Round ' + marketEnv.round + ' is finished.');
    marketEnv.round += 1;
}

function cheapestSeller(newIndex, buyer) {
    let searchIndex = 0;
    if (newIndex !== undefined) { searchIndex += newIndex }
    const prices = marketEnv.persons.map(({ productCost }) => productCost);
    prices.sort();
    let seller;
    function findSellerId(price) {
        seller = marketEnv.persons.find( ({ productCost }) => productCost == price)
    }
    findSellerId(prices[searchIndex])
    if (seller.products === 0 || buyer.money < seller.productCost || seller.index === buyer.index) { searchIndex += 1; cheapestSeller(searchIndex)}
    else { console.log('Cheapest seller is: ' + seller.index); return seller }
}

function transaction(buyer, seller) {
    buyer.money -= seller.productCost;
    seller.money += seller.productCost;
    buyer.products += 1;
    seller.products -= 1;
    buyer.statistics.bought += 1;
    buyer.statistics.spend += seller.productCost;
    seller.statistics.sold += 1;
    seller.statistics.earned += seller.productCost;
    console.log('Transaction: ' + buyer.index + ' to ' + seller.index + '. For $' + seller.productCost)
}