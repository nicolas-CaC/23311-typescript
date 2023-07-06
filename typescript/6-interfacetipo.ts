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
        slogan: () => string
    }


}