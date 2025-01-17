abstract class Veiculo{
    constructor(public marca: string){}

    abstract descrever(): string;

    static mostrarDescricao(veiculos: Veiculo[]): string[]{
        return veiculos.map(veiculo => veiculo.descrever())
    }
}

export class Carro extends Veiculo{
    constructor(marca: string, public numeroPortas: number){
        super(marca);
    }

    descrever(): string {
        return `O carro da marca ${this.marca} possui ${this.numeroPortas} portas.`
    }
}

export class Moto extends Veiculo{
    constructor(marca:string, public numeroRodas: number){
        super(marca);
    }

    descrever(): string {
        return `As motos da marca ${this.marca} normalmente possuem ${this.numeroRodas} rodas.`
    }
}