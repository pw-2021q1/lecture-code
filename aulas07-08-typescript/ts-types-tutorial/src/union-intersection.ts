interface MembroAcademico {
    nome: string,
    sobrenome: string
}

interface Professor extends MembroAcademico {
    siape: string
}

interface Aluno extends MembroAcademico {
    ra: string, 
    idade: number
}

interface AlunoGrad extends Aluno {
    curso: string
}

interface AlunoPos extends Aluno {
    programa: string,
    orientador: string
}

const p1 : Professor = {
    nome: 'joao',
    sobrenome: 'siqueira',
    siape: '9876'
}

const ap1 : AlunoPos = {
    nome: 'joao',
    sobrenome: 'silva',
    ra: '383388',
    idade: 26,
    programa: 'ppgcc',
    orientador: 'pedro siqueira'
}

type AlunoTrilha = AlunoGrad & AlunoPos
type AlunoGeral = AlunoGrad | AlunoPos

const ap2 : AlunoTrilha = {
    nome: 'joao',
    sobrenome: 'silva',
    ra: '383388',
    idade: 26,
    curso: 'bcc',
    programa: 'ppgcc',
    orientador: 'pedro siqueira'
}

const ap3 : AlunoGeral = {
    nome: 'joao',
    sobrenome: 'silva',
    ra: '383388',
    idade: 26,
    programa: 'ppgcc',
    orientador: 'pedro siqueira'
} as AlunoPos

export = {}