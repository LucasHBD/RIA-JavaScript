
export function dobro(array: number[]) : number[]{
    let resultado: number[] = [];
    for(let i = 0; i < array.length; i++){
        resultado.push(array[i] ** 2);
    }
    return resultado;
}

export function dobroForEach(array: number[]) : number[]{
    let resultado: number[] = [];
    array.forEach((num) => resultado.push(num ** 2));
    return resultado;
}

export default dobro;