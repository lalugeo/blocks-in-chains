const Block = require('./Block');

class BlockChain{
    constructor() {
        this.chain = [this.createGenesis()];
    }

    createGenesis() {
        return new Block("01/01/2019", {"desc":"Genesis block", "amount":"0"});
    }

    latestBlock() {
        return this.chain[this.chain.length - 1];
    }

		getChainLength(){
			return this.chain.length;
		}

    addBlock(newBlock){
				newBlock.index = this.getChainLength();
        newBlock.previousHash = this.latestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    checkValid() {
        for(let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}

module.exports = BlockChain;
