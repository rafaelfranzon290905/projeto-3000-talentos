// console.log("Salve!")

// // leru leru


// const nome = prompt('Qual seu nome')
// const idade = parseInt(prompt('Qual sua idade'))
// const endereco = prompt("Qual seu endereço")


// console.log(`Você se chama ${nome} tem ${idade} anos de idade e mora em ${endereco}`)
// console.log("alias, vai comprar legging")

let nome = prompt("Seu nome:")
let sobrenome = prompt("seu sobrenome:")
let idade = prompt("Sua idade:")
let estudante = prompt("se for estudante digite s, se não n:")
if (estudante == "s") {
    estudante = true
}
else {
    estudante = false
}


console.log(`Status de estudante: \n\n nome: ${nome} sobrenome: ${sobrenome} idade: ${idade} Status de estudante: ${estudante}`)