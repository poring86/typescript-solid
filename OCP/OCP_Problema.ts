// Open Closed Principle - Problema

// Uma classe não deve ter regras ou comportamento novos adcionadas. O exemplo a seguir está incorreto

// class Movie{
//     private type: string

//     constructor(type: string){
//         this.type = type
//     }

//     public calculaInteresse(){
//         if(this.type === "Filme"){
//             console.log("Calculo baseado em filme")
//         }
//         else if (this.type === "TVShow"){
//             console.log('Calculo baseado em TVShow')
//         }
//     }
    
// }

// const filme = new Movie("Filme")
// filme.calculaInteresse()

