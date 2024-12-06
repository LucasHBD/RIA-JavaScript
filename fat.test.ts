import { fat } from './fat';

test('Teste o fatorial de 4', () => {
    expect(fat(4)).toBe(24);
});

test('Teste o fatorial de 3', () => {
    expect(fat(3)).toBe(6);
});

test('Teste o fatorial de 10', () => {
    expect(fat(10)).toBe(3628800);
});

test('Teste o fatorial de 1', () => {
    expect(fat(1)).toBe(1);
});

test('Teste o fatorial de 0', () => {
    expect(fat(0)).toBe(1);
});

test('Teste o fatorial de -5', () => {
    expect(() => fat(-5)).toThrowError('Fatorial não é definido para números negativos');
});