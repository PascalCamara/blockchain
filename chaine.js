class Chaine {

    constructor(data) {
        this.data = data
        this.prevChaine = null
        this.nextChaine = null
        this.firstChaine = null
    }

    add(chaine) {
        // si this.firstchaine && chaine.firstchaine == null
        //      this.firstchaine = this
        // dans tout les cas
        //     chaine.firstchaine = this.firstchaine
        if (this.firstChaine == null && chaine.firstChaine == null) {
            this.firstChaine = this
        } 
        chaine.firstChaine = this.firstChaine
        
        
        // tant que self.nextChaine != null
        // self.add(chaine)
        // sinon self.nextChaine = chaine
        if (this.nextChaine != null) {
            this.nextChaine.add(chaine)
        } else {
            this.nextChaine = chaine
        }

    }

    removeByData(data) {
    }

    removeByIndex(index) {
    }

    // at first
    print() {

        console.log(this)
       if (this.nextChaine)
        this.nextChaine.print()

    }



}

let a = new Chaine("la chaine A")
let b = new Chaine("la chaine B")
let c = new Chaine("la chaine C")

a.add(b)
a.add(c)

b.print()
