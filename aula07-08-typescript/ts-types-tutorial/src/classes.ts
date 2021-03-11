abstract class Aluno {
    nome: string
    sobrenome: string
    private _ra: string = ""

    constructor(nome: string, sobrenome: string, ra: string) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.ra = ra
    }

    set ra(ra: string) {
        if (/^\d+$/.test(ra)) {
            this._ra = ra
        } else {
            throw new Error("Illegal argument: RA must be digits")
        }
    }

    get ra(): string {
        return this._ra
    }

    toString(): string {
        return `Nome: ${this.nome}\n`
            + `Sobrenome: ${this.sobrenome}\n`
            + `RA: ${this.ra}\n`
    }
}

class AlunoGrad extends Aluno {
    curso: string

    constructor(nome:string, sobrenome: string, ra: string, curso: string) {
        super(nome, sobrenome, ra)
        this.curso = curso
    }

    toString() {
        return super.toString() + `Curso: ${this.curso}\n`
    }
}

class AlunoPos extends Aluno {
    programa: string
    orientador: string

    constructor(nome:string, sobrenome: string, ra: string, 
        programa: string, orientador: string) {
            super(nome, sobrenome, ra)
            this.programa = programa
            this.orientador = orientador
    }

    toString() {
        return super.toString() + `Programa: ${this.programa}\n`
            + `Orientador: ${this.orientador}\n`
    }

}

// const a1 = new Aluno('joao', 'silva', '1234')
// a1.ra = '56a8'

const ag1 = new AlunoGrad('joao', 'silva', '1234', 'bcc')
const ap1 = new AlunoPos('maria', 'pereira', '5678', 'ppgcc', 'cassio diniz')

console.log(ag1.toString())
console.log(ap1.toString())


export = {}