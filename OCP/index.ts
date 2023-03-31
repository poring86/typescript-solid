// Open Closed Principle - Solução

// Uma classe deve estar aberta para extenção, e não para implementação de novos métodos. 
// Abaixo a solução para o prolema criando uma classe abstrata como base e extenção 
// de outras para implementação de novos métodos

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