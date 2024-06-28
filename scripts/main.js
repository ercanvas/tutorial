const teams = [
      {name: 'arsenal', power: 14},
      {name: 'liverpool', power: 20},
      {name: 'borussia dortmund', power: 18},
      {name: 'chelsea', power: 16}
];

class newBet{
      constructor(name, price){
            this.name = name;
            this.price = price;
      };
}
var bets = [];
class Betting{
      addBet(name, price){
            let nbet = new newBet(name, price);
            bets.push(nbet);
            return bets;
      };
};

const lastBet = new Betting;
const toList = lastBet.addBet('liverpool',1000);
console.clear();
console.log(toList);