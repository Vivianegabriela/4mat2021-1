/*let nota = 4.7

let situacao

if (nota >= 6) {
    situacao = 'APROVADO!'
}
else {
    situacao = 'REPROVADO!' 
}

if(nota >= 6) situacao = 'APROVADO!'
else situacao = 'REPROVADO!'*/

nota = 8.6

//Usando operador ternário
//1° termo: condição (que iria no if)
//Separando o 1° termo do 2° temos '?'
//2° termo: resultado caso a consição seja verdadeira
//Separando o 2° termo do 3° temos ':'
//3° termo:resultado caso a condição seja falsa
situacao = (nota >= 6 ? 'APROVADO!' : 'REPROVADO!')

console.log({nota, situacao})

let user = 'zemane'
let msg

msg = (user == 'root' || user === 'admin' ? 'Suprusuário' : 'Usuário comum')

console.log({user, msg})








