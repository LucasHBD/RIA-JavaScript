import { filtrar } from "./par"

test("Teste o filtro do array [8, 3, 9, 5, 6, 12]", () => {
    const input = [8, 3, 9, 5, 6, 12];
    const expected = [8, 6, 12];
    expect(filtrar(input)).toEqual(expected);
});