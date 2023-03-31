// Liskov Substituition Principle

// Uma classe filho deve poder utilizar todos os métodos da classe pai e substituida por ela


class Movie{
    public play(){
        console.log("Filme iniciado")
    }
    public increaseVolume(){
        console.log("Volume aumentado")
    }
}

class TheLionKing extends Movie{

}

// ModernTimes não pode utilizar o increase volume pois se trata de um filme mudo logo é um erro, e não está seguindo o LSP!
class ModernTimes extends Movie{

}

const film = new Movie()
film.play()
film.increaseVolume()