function fat(n: number): number {
    let resultado: number = n;
    if (n === 0 || n === 1) return 1;
    while (n > 1) {
        n--;
        resultado *= n;
    }
    return resultado;
}

export { fat };