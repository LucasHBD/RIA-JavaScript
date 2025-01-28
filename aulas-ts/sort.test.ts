import { ordenar } from "./sort"

test("Teste a ordenação das palavras carro, boneco, ave, lapis", () => {
    const input = ['carro', 'boneco', 'ave', 'lapis'];
    const expected = ['ave', 'boneco', 'carro', 'lapis'];
    expect(ordenar(input)).toEqual(expected);
});