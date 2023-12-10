const alunos = [ 'Miguel',
    'Gael',
    'Maria Alice',
    'Arthur',
    'Helena',
    'Heitor',
    'Alice',
    'Theo',
    'Laura',
    'Davi',
    'Samuel',
    'Bernardo',
    'Gabriel',
    'Ravi',
    'João Miguel',
    'Noah',
    'Maria Cecilia',
    'Cecilia',
    'Maite',
    'Heloisa' 
];

console.log(alunos)

const sala1 = alunos.slice(0, alunos.length / 2)
const sala2 = alunos.slice(alunos.length / 2)

console.log(`A sala 1 tem ${sala1}`)
console.log(`A sala 2 tem ${sala2}`)