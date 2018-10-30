const Block = require('./Block');
const BlockChain = require('./BlockChain');

let jsChain = new BlockChain();
jsChain.addBlock(new Block("10/25/2018", {amount: 5}));
jsChain.addBlock(new Block("10/26/2018", {amount: 10}));

console.log(JSON.stringify(jsChain, null, 4));
console.log("Is blockchain valid? " + jsChain.checkValid());
