"use strict";
var tipos;
(function (tipos) {
    let msg = "Holis";
    let b = 4;
    let c = true;
    const e = 20;
    let f;
    console.log(f);
    let g = undefined;
    console.log(g);
    const i = Symbol();
    console.log(i);
    let j = 'okey';
    let k;
    let l;
    function dormir() { return 'zzz'; }
    ;
    function ovejasContadas() { return 120; }
    ;
    k = dormir;
    k = ovejasContadas;
    l = ovejasContadas;
    const nunca = (mensaje) => {
        throw new Error(mensaje);
    };
    let arrayNumeros = [1, 2, 3, 4, 5];
    let arrayStrings = ['a', 'b', 'c'];
    let arrayMixto = [1, 2, 3, 4, 'a', 'b', 'c'];
    let arrayPreciso = ['d', 1, 1234];
    let suma = arrayNumeros[0] + arrayNumeros[1];
    function funcionUno(value) {
        console.log('holis', value || 'no se pasó parámetro');
    }
    funcionUno(3);
    funcionUno();
})(tipos || (tipos = {}));
var otro;
(function (otro) {
    otro.variable = 'Correspondo al namespace otro';
})(otro || (otro = {}));
console.log(otro.variable);
var archivo3;
(function (archivo3) {
    archivo3.variable1 = 'Hola';
    archivo3.variable2 = 2;
    console.log(archivo3.variable1);
    console.log(archivo3.variable2);
})(archivo3 || (archivo3 = {}));
class Fabrica {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    get devolverNombre() {
        return this.nombre;
    }
    set cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
}
class Productos extends Fabrica {
    constructor(nombre, precio, cantidad, impuestoPersonal = 10) {
        super(nombre, precio);
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.impuestoPersonal = impuestoPersonal;
        this.id = this.getId();
        this.iva = 21;
        this.cantidad = cantidad || 1;
    }
    getId() {
        return ++Productos.id;
    }
    static verProductosCreados() {
        console.log('Método static: Productos Creados:', this.id);
    }
    getImpuesto() {
        return this.impuestoPersonal;
    }
}
Productos.id = 0;
let b = new Productos('Alberto', 50, 5, 20);
Productos.verProductosCreados();
console.log(b.cantidad);
console.log(b.getImpuesto());
console.log(b.devolverNombre);
class Producto {
    constructor(name) {
        this.name = name;
    }
    static crearNombre(nombre) {
        return new Producto(nombre);
    }
    static get clase() {
        if (!Producto.instance)
            Producto.instance = new Producto('Sin nombre');
        return Producto.instance;
    }
}
const prod = Producto.crearNombre('Galleta');
console.log(prod);
const sinNombre = Producto.clase;
console.log(sinNombre);
var Notas;
(function (Notas) {
    Notas[Notas["muyMal"] = 1] = "muyMal";
    Notas[Notas["mal"] = 3] = "mal";
    Notas[Notas["regular"] = 4] = "regular";
    Notas[Notas["bien"] = 6] = "bien";
    Notas[Notas["muyBien"] = 8] = "muyBien";
    Notas[Notas["excelente"] = 9] = "excelente";
    Notas[Notas["sobresaliente"] = 10] = "sobresaliente";
})(Notas || (Notas = {}));
let notas = Notas.bien;
console.log(notas);
console.log(Notas);
var interfacesTipos;
(function (interfacesTipos) {
    let mesa = {
        patas: 2,
        material: 'madera',
        accesorios: ['vidrio', 'maceta'],
        plegable: true,
        envio: () => 'si hay envio'
    };
    const lego = {
        nombre: 'Lego',
        piezas: 1,
        material: 'plastico',
        pilas: false,
        fabricante: {
            marca: "Hasbro",
            pais: 'USA'
        },
        slogan() { return 'Siempre te divertiremos'; },
        llega(dias) {
            console.log(`llega en ${dias} días`);
        }
    };
    console.log(lego);
    console.log(lego.slogan());
    lego.llega(4);
})(interfacesTipos || (interfacesTipos = {}));
var implementaciones;
(function (implementaciones) {
    class Cosa {
        constructor(nombre, material, anio) {
            this.nombre = nombre;
            this.material = material;
            this.anio = anio;
        }
        darNombre() {
            return this.nombre;
        }
    }
    const objeto = new Cosa('Jabon', 'barro', 2000);
    console.log(objeto);
    console.log(objeto.darNombre());
})(implementaciones || (implementaciones = {}));
var genericos;
(function (genericos) {
    const pepe = {
        nombre: 'Pepe',
        etapa: 'Niño',
        escuela: 'Don Bosco'
    };
    const juan = {
        nombre: 'Juan',
        etapa: 'Jubilado',
        trabajo: 'Almacen'
    };
    const pablo = {
        nombre: 'Pablo',
        etapa: 'Universitario',
        escuela: 'UBA',
        trabajo: 'Mc Donalds'
    };
    function imprimir(valor) {
        console.log(valor);
        return valor;
    }
    const devolverDatos = (valor) => valor;
    const persona1 = devolverDatos(pablo);
    const persona2 = devolverDatos(pablo);
    const persona3 = devolverDatos(pablo);
    console.log(persona1.escuela);
    console.log(persona2.escuela, persona2.trabajo);
    console.log(persona3.trabajo);
    class Generica {
        hazAlgo(x, y) {
            return x;
        }
    }
    let instancia = new Generica();
    let variable = instancia.hazAlgo(3, 4);
    console.log(variable);
})(genericos || (genericos = {}));
//# sourceMappingURL=traspilacion.js.map