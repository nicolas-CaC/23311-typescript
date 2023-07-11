namespace genericos {

    interface Nene {
        nombre: string
        etapa: string
        escuela: string
    }

    interface Joven {
        nombre: string
        etapa: string
        escuela: string
        trabajo: string
    }

    interface Adulto {
        nombre: string
        etapa: string
        trabajo: string
    }

    const pepe: Nene = {
        nombre: 'Pepe',
        etapa: 'Niño',
        escuela: 'Don Bosco'
    }

    const juan: Adulto = {
        nombre: 'Juan',
        etapa: 'Jubilado',
        trabajo: 'Almacen'
    }

    const pablo: Joven = {
        nombre: 'Pablo',
        etapa: 'Universitario',
        escuela: 'UBA',
        trabajo: 'Mc Donalds'
    }

    function imprimir<T>(valor: T): T {
        console.log(valor);
        return valor
    }

    const devolverDatos = <T>(valor: T): T => valor

    const persona1 = devolverDatos<Nene>(pablo)
    const persona2 = devolverDatos<Joven>(pablo)
    const persona3 = devolverDatos<Adulto>(pablo)

    console.log(persona1.escuela);
    console.log(persona2.escuela, persona2.trabajo);
    console.log(persona3.trabajo);

    class Generica<T>{

        hazAlgo(x: T, y: T) {
            return x
        }
    }

    let instancia = new Generica<number>()
    let variable = instancia.hazAlgo(3, 4)
    console.log(variable);

}