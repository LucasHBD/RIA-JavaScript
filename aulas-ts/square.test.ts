import { dobro, dobroForEach } from './square';

test('Teste o dobro do array [3, 5, 7, 3, 8, 9, 1]', () => {
    const input = [3, 5, 7, 3, 8, 9, 1];
    const expected = [9, 25, 49, 9, 64, 81, 1];
    expect(dobro(input)).toEqual(expected);
});

test('Teste o dobro do array [3, 5, 7, 3, 8, 9, 1] com ForEach', () => {
    const input = [3, 5, 7, 3, 8, 9, 1];
    const expected = [9, 25, 49, 9, 64, 81, 1];
    expect(dobroForEach(input)).toEqual(expected);
});