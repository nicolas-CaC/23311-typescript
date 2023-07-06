namespace tipos {

    let msg: string = "Holis";
    let b: number = 4;
    let c: boolean = true;
    // let d: any

    const e = 20;

    let f: undefined;
    console.log(f);

    let g: undefined = undefined;
    console.log(g);

    const i: unique symbol = Symbol();
    console.log(i);

    let j: unknown = 'okey';
    // let j1: string = j;
    // let j2: number = j;
    // let j3: boolean = j;
    // let j4: (string | number | boolean | null | undefined) = j;

    let k: Function;
    let l: () => number;

    function dormir() { return 'zzz' };
    function ovejasContadas() { return 120 };

    k = dormir;
    k = ovejasContadas;
    l = ovejasContadas;
    // l = dormir;

    const nunca = (mensaje: string): never => {
        throw new Error(mensaje)
    }

    // nunca('Es el never')

    let arrayNumeros: number[] = [ 1, 2, 3, 4, 5 ]
    let arrayStrings: string[] = [ 'a', 'b', 'c' ]
    let arrayMixto: (number | string)[] = [ 1, 2, 3, 4, 'a', 'b', 'c' ]
    let arrayPreciso: [ string, number, number ] = [ 'd', 1, 1234 ]

    let suma: number = arrayNumeros[ 0 ] + arrayNumeros[ 1 ]

    function funcionUno(value?: number): void {
        console.log('holis', value || 'no se pasó parámetro');
    }

    funcionUno(3)
    funcionUno()
}

