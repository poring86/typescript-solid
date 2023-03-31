// Open Closed Principle - Problema

abstract class Video{
    public abstract calculaInteresse(): void
}

class Movie extends Video{
    public calculaInteresse(): void {
        console.log("Interesse baseado em Filme")
    }
}

class TVShow extends Video{
    public calculaInteresse(): void {
        console.log("Interesse baseado em TV Show")
    }
}

const filme = new Movie()
const tvShow = new TVShow()
filme.calculaInteresse()
tvShow.calculaInteresse()