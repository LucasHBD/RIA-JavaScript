export function concatenar(array: string[]): string{
    let frase: string[] = [];
    for(let i = 0; i < array.length; i++){
        frase.push(array[i]);
    }
    return frase.join(" ");
}

export default concatenar;