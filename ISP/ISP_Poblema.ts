// Interface segregation principle

// No caso a seguir temos um exemplo onde o ISP não é seguido corretamente, pois a interface possui métodos no qual
// algumas classes não podem aplicar o metodo increase volume, tendo que aplicar um throw new error
// interface Movie{
//     play (): void
//     increaseVolume (): void 
// }

// class TheLionKing implements Movie{
//     public play(): void{
//         console.log("Play the movie")
//     }
//     public increaseVolume(): void {
//         console.log("Increase Volume")
//     }
// }

// class ModernTimes implements Movie{
//     public play(): void{
//         console.log("Play the movie")
//     }
//     public increaseVolume(): void {
//         throw new Error("Invalid method")
//     }
// }