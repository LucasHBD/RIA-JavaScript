import { concatenar } from "./string"

test("Teste a junção das palavras Arrays, com, TypeScript com o join", () => {
    const input = ['Arrays', 'com', 'TypeScript'];
    const expected = 'Arrays com TypeScript';
    expect(concatenar(input)).toBe(expected);
});