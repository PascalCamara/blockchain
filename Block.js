const sha256 = require('js-sha256');
const difficulty = 5

class Block {

    constructor(data) {
        this.data = data
        this.timestamp = Date.now()
        this.hash = null

        this.nounce = 0
        this.index = null

        this.prev = null
        this.next = null
        this.first = null


    }

    calculateHash () {
        return sha256( 
            this.prev.hash +
            this.timestamp+
            this.nounce +
            this.data
        )
    }

    // ajoute à la fin
    add(block) {

        // si premier block 
        if (this.first == null) {
            this.first = this
            this.prev = {hash: "genesisBlock"}
            this.index = 1
        }

        // set first block ref
        block.first = this.first

        // is next ref ? 
        if (this.next == null) {
            block.prev = this
            block.privateMine()
            this.next = block
            this.next.index = this.index+1
            
        } else {
            this.next.add(block)
        }

    }

    mine(newBlock) {
        this.add(newBlock)
    }

    privateMine() {
        // cf schema -> readme.md
        this.hash = this.calculateHash()
        let target = stringToHex("0".repeat(difficulty))
        
         //  hex (js)
        while(stringToHex(this.hash.substring(0, difficulty)) != target) {
            this.nounce++
            this.hash = this.calculateHash()
        }
    }
  
}

// https://snipplr.com/view/52975/
function d2h(d) {
    return d.toString(16);
}
function h2d (h) {
    return parseInt(h, 16);
}
function stringToHex (tmp) {
    var str = '',
        i = 0,
        tmp_len = tmp.length,
        c;
 
    for (; i < tmp_len; i += 1) {
        c = tmp.charCodeAt(i);
        str += d2h(c) + '';
    }
    return str;
}



let blockA = new Block("Block A")
let blockB = new Block("Block B")
let blockC = new Block("Block C")
let blockD = new Block("Block D")

blockA.mine(blockB)
blockB.mine(blockC)
blockA.mine(blockD)

blockA.print()
