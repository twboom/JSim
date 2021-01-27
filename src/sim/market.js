let env = {
    persons: [],

}

class person {
    constructor(index) {
        this.index = index;
        this.randomWealth = Math.random();
        this.products = 10 - 10 * this.randomWealth;
        this.money = 100 * this.randomWealth;
    };
};

function marketInit(personCount) {
    for (let i = 0; i < personCount; i++) {
        newPerson = new person(i);
        env.persons.push(newPerson);
    }
}


function market() {

}