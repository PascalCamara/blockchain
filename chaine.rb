class Chaine

    attr_accessor :data, :prevChaine, :nextChaine, :firstChaine
    
    def initialize(data)
        @data = data
        @prevChaine = nil
        @nextChaine = nil
        @firstChaine = nil
    end

    def add(chaine)
        # tant que self.nextChaine != null
            # self.add(chaine)
        # sinon self.nextChaine = chaine
        if (@nextChaine != nil)
            @nextChaine.add(chaine)
        else
            @nextChaine = chaine
        end
    end

    def removeByData(data)
    end

    def removeByIndex(index)
    end

    def print
        puts data
        unless @nextChaine.nil?
            @nextChaine.print()
            puts @firstChaine.data
        else
            puts "END"
        end
    end

    def printAtFirst

    end

end

a = Chaine.new("la chaine A")

b = Chaine.new("la chaine B")

c = Chaine.new("la chaine C")

a.add(b)
a.add(c)

b.print()
