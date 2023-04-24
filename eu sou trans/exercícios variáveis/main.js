// Exercício 1 

// let a = 10
// let b = 10

// console.log(b)

// b = 5
// console.log(a, b)

/* A resposta impressa no console será:

console.log(b) - 10 isso se dá pois a variável b foi declarada desse jeito anteriormente

b = 5
console.log(a, b) - 10 5 Isso pois a variável b foi alterada para 5 e o código segue suas linhas de cima para baixo

*/ 

// Exercício 2

// let a = 10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c)

/* 

O console irá mostrar 10 10 10 pois todas as variáveis foram substituidas por elas.

*/ 

// let p = prompt("Quantas horas você trabalha por dia?")
// let t = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${t/p} por hora`)

/* 
p = horasDeTrabalhoDiarias
t = GanhosDiarios

*/ 


// 1. Construa um programa, seguindo os seguintes passos:
// a) Declare uma variável para armazenar um nome, sem atribuir um valor.
// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
// g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu

let nome 
let idade

console.log(typeof nome)
console.log(typeof idade)

// Ele retorna undefined pois a variável não possui nenhuma valor dito, ou seja, não é definida

nome = prompt("Digite seu nome:")
idade = prompt("Digite sua idade:")

console.log(typeof nome)
console.log(typeof idade)

// Agora sim, os tipos da variáveis são definidos, mas ambos são string pois tal é o padrão do prompt caso não definido previamente como outra

console.log(`Olá ${nome}, você tem ${idade} anos.`)


// -------------------------------

// 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:  
//     a) Crie três novas variáveis, contendo as respostas
//     b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:


let pergunta1 = prompt("Você é gay - Responda Sim ou Não")
let pergunta2 = prompt("Você usa saia - Responda Sim ou Não")
let pergunta3 = prompt("Você está de maquiagem - Responda Sim ou Não")

let resposta1 = pergunta1
let resposta2 = pergunta2
let resposta3 = pergunta3

console.log(`Você é gay - ${resposta1}`)
console.log(`Você usa saia - ${resposta2}`)
console.log(`Você está de maquiagem - ${resposta3}`)



// 3. Suponha que temos duas variáveis a e b, cada uma com um valor inicial
let a = 10
let b = 25
// Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 
// Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.

let a1 = a
let b1 = b
a = b1
b = a1

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b)


