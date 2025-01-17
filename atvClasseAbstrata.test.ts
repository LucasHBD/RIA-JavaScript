import {Carro, Moto} from './atvClasseAbstrata';

test("Teste a implementação da classe Carro", ()=>{
    const carro = new Carro("Ferrari", 4);
    expect(carro.descrever()).toBe("O carro da marca Ferrari possui 4 portas.")
})

test("Teste a implementação da classe Moto", ()=>{
    const moto = new Moto("Yamaha", 2);
    expect(moto.descrever()).toBe("As motos da marca Yamaha normalmente possuem 2 rodas.")
})