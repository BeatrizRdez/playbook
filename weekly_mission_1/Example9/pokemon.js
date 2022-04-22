class Pokemon{
    constructor(name){
        this.name = name
    }

    sayHello(){
        console.log(`Mi pokemón ${this.name} te saluda!!!`)
    }

    sayMessage(mensaje){
        console.log(`Mi pokemón ${this.name} dice: ${mensaje}!`)
    }
}

module.exports = { Pokemon }