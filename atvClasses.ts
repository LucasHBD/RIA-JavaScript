interface Narrar {
    print(): void;
}

export class Time implements Narrar{
    nome: string;
    titulos: number;
    constructor(nome: string, titulos: number){
        this.nome = nome;
        this.titulos = titulos;
    }

    print(){
        return `Gol, o ${this.nome} fez um gol, o time atualmente possue ${this.titulos} titulos!`
    }
}

export class Estadio implements Narrar{
    capacidade: string;
    apelido: string;

    constructor(capacidade: string, apelido: string){
        this.capacidade = capacidade;
        this.apelido = apelido;
    }

    print(){
        return `O Estádio conhecido como ${this.apelido} tem capacidade para ${this.capacidade} torcedores!`
    }
}

