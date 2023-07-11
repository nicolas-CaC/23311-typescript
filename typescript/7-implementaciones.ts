namespace implementaciones {

    interface Elemento {
        nombre: string,
        material: string,
        darNombre(): string
    }

    interface Creacion {
        anio: number
    }

    class Cosa implements Elemento, Creacion {

        constructor(
            public nombre: string,
            public material: string,
            public anio: number
        ) { }

        darNombre(): string {
            return this.nombre;
        }
    }

    const objeto: Cosa = new Cosa('Jabon', 'barro', 2000)

    console.log(objeto);
    console.log(objeto.darNombre());




}