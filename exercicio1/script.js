// let nome 
// let idade 
// console.log (nome, typeof nome )
// console.log (idade, typeof idade)
// Na tela apareceu como 'undefined' pois não foram inseridos valores para as variáveis.

let nome = prompt ('Qual seu nome?')
console.log (nome)
let idade = Number (prompt ('Qual sua idade?'))
console.log (idade)
console.log (nome, typeof nome)
console.log (idade, typeof idade)
// Nesse caso o tipo da variável mudou pois eu modifiquei.

console.log (`Olá ${nome}, você tem ${idade} anos.`)
