// Interface segregation principle
// No caso abaixo a seguir temos um exemplo de como resolver o problema, utilizando o ISP.
// Dividindo a interface em duas podemos aplicar quando ela for necessária ou não
interface Movie{
    play (): void
}

interface AudioControl{
    increaseVolume (): void 
}

class TheLionKing implements Movie, AudioControl{
    public play(): void{
        console.log("Play the movie")
    }
    public increaseVolume(): void {
        console.log("Increase Volume")
    }
}

class ModernTimes implements Movie{
    public play(): void{
        console.log("Play the movie")
    }
}

const film1 = new TheLionKing()
film1.play()
film1.increaseVolume()