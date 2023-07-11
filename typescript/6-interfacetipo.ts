namespace interfacesTipos {

    type Mesa = {
        patas: number,
        material: string,
        plegable: boolean,
        accesorios: string[],
        envio?: () => string
    }

    let mesa: Mesa = {
        patas: 2,
        material: 'madera',
        accesorios: [ 'vidrio', 'maceta' ],
        plegable: true,
        envio: () => 'si hay envio'
    }


    interface Juguete {
        nombre: string,
        piezas: number,
        material: string,
        pilas: boolean,
        slogan: () => string,
        llega(dias: number): void,
        fabricante: Fabricante
    }

    interface Fabricante {
        marca: string,
        pais: string
    }

    const lego: Juguete = {
        nombre: 'Lego',
        piezas: 1,
        material: 'plastico',
        pilas: false,
        fabricante: {
            marca: "Hasbro",
            pais: 'USA'
        },
        slogan() { return 'Siempre te divertiremos' },
        llega(dias) {
            console.log(`llega en ${dias} días`);
        }
    }

    console.log(lego);
    console.log(lego.slogan());
    lego.llega(4);





}