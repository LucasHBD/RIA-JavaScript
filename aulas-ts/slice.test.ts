import { separar } from "./slice"

test("Teste a separação do array [2,4,6,2,8,9,5]", () => {
    const input = [2, 4, 6, 2, 8, 9, 5];
    const expected = [2, 4];
    expect(separar(input)).toEqual(expected);
});