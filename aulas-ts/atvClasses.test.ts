import {Time, Estadio} from './atvClasses';

test("Teste a implementação das classes Time", ()=>{
    const time = new Time("Fortaleza", 46);
    expect(time.print()).toBe("Gol, o Fortaleza fez um gol, o time atualmente possue 46 titulos!")
})

test("Teste a implementação da classe Estadio", ()=>{
    const estadio = new Estadio("45.000", "Machadão");
    expect(estadio.print()).toBe("O Estádio conhecido como Machadão tem capacidade para 45.000 torcedores!")
})