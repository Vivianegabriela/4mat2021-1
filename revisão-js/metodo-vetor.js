let pets = [
    {nome: 'Mel', especie: 'cão', sexo: 'F', peso: 5.5},
    {nome: 'Paçoca', especie: 'gato', sexo: 'F', peso: 3.2, idade: 5},
    {nome: 'Matusalém', especie: 'tartaruga', sexo: 'M', peso: 12, idade: 103 },
    {nome: 'Thor', especie: 'cão', sexo: 'M', peso: 23, idade: 8},
    {nome: 'Paco', especie: 'papagaio', sexo: 'M',peso: 1, idade: 53},
    {nome: 'Aveia', especie: 'gato', sexo: 'F', peso: 3.5, idade: 4}​​
]
let numeros = [2, 0, -7, 11, 4, 9, 13, -8]

//find() -> busca valores de acordo com um critério
console.log(pets.find(x => x.nome === 'Thor'))
console.log(pets.find(x => x.especie ==='gato' && x.sexo === 'M'))
console.log(pets.find(x.idade >= 4))

console.log('-------------------------------------------')

console.log(pets.some(x => x.name === 'Mingau'))
console.log(pets.some(x => x.idade >= 4))

console.log('-------------------------------------------')
console.log(pets.every(x => x.peso >= 1))
console.log(pets.every(x => x.especie === 'cão'))

console.log('-------------------------------------------')
console.log(pets.filter(x => x.especie === 'gato'))
console.log(pets.filter(x => x.idade >= 50 ))
console.log(pets.filter(x => x.especie === 'gato' && x.sexo === 'M'))

console.log('-------------------------------------------')
console.log(pets.map(x => x.nome))

console.log(numeros.map(x => x ** 2))

