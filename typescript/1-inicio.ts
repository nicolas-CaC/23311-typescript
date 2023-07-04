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
