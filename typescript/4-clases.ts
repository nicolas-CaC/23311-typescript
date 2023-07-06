abstract class Fabrica {

    constructor(
        public nombre: string,
        public precio: number
    ) { }

    get devolverNombre(): string {
        return this.nombre
    }

    set cambiarNombre(nuevoNombre: string) {
        this.nombre = nuevoNombre
    }
}


class Productos extends Fabrica {

    static id: number = 0;

    private id: number = this.getId();
    private iva: number = 21;

    constructor(
        public override nombre: string,
        public override precio: number,
        public cantidad?: number,
        private impuestoPersonal: number = 10) {
        super(nombre, precio)
        this.cantidad = cantidad || 1;
    }

    private getId(): number {
        return ++Productos.id
    }

    static verProductosCreados(): void {
        console.log('Método static: Productos Creados:', this.id);
    }

    public getImpuesto() {
        return this.impuestoPersonal;
    }
}

let b = new Productos('Alberto', 50, 5, 20)
Productos.verProductosCreados();
console.log(b.cantidad);
console.log(b.getImpuesto());
console.log(b.devolverNombre);

// =======================================================

class Producto {

    static instance: Producto;

    private constructor(private name: string) { }

    static crearNombre(nombre: string): Producto {
        return new Producto(nombre)
    }

    static get clase(): Producto {
        if (!Producto.instance)
            Producto.instance = new Producto('Sin nombre')
        return Producto.instance
    }
}


const prod: Producto = Producto.crearNombre('Galleta');
console.log(prod);

const sinNombre = Producto.clase;
console.log(sinNombre);

