interface Aluno {
    nome: string,
    sobrenome?: string,
    ra: string, 
    idade: number
}

const a1: Aluno = {
    nome: 'joao', 
    sobrenome: 'silva',
    ra: '1234',
    idade: 25
}

export {}