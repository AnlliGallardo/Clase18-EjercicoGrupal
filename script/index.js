import Paises from "./modulos/mOrdenamiento.js";

var arregloValores;
let arregloDistancia;
let arregloNombrePaises = [];
let arregloPaises = [];
let arregloTamanio = [];

var enviarEvaluacion = (e) => {

    let inputs = [...document.querySelectorAll(".numeracion_paises")];
    let inputsD = [...document.querySelectorAll(".distancia_paises")];
    let inputsN = [...document.querySelectorAll(".nombre_paises")];
    let inputsT = [...document.querySelectorAll(".Tamanio_paises")];

    arregloValores = inputs.map((input) => {
        return parseInt(input.value);
    });

    arregloDistancia = inputsD.map((distancia) => {
        return distancia.value;
    });

    arregloTamanio = inputsT.map((tamanio) => {
        return tamanio.value;
    });

    arregloNombrePaises = inputsN.map((nombrePais) => {
        return nombrePais.value;
    });


    //Lenar arreglo Planeta

    for (let x = 1; x <= arregloValores.length; x++) {
        let pais = new Paises();
        Paises.distancia_tierra = document.getElementById(`d_pais_${x}`).value;
        Paises.nombre = document.getElementById(`np_pais_${x}`).value;
        Paises.numero_clasificacion = document.getElementById(`n_pais_${x}`).value;
        Paises.tamanio = document.getElementById(`t_pais_${x}`).value;

        arregloPaises.push(pais);
        console.log(x)
    }

    console.log(arregloPaises);
    alert("Arreglo creado correctamente");
}

let ordernarValores = (e) => {
    /**
     * Generamos copia del arreglo en ambos casos.
     */
    let copiArregloValores = arregloValores.map(numero => numero);
    let copiaArregloPaises = arregloPaises.map(pais => pais);

    /**
     * Procedemos a ordenar el arreglo,  en el segundo caso,  emplearemos una propiedad de la 
     * clase planeta,  como elemento de comparacion en la funcion de ordenamiento
     */
    copiArregloValores.sort((a, b) => {
        return a - b;
    });

    copiaArregloPaises.sort((a, b) => {
        return a.numero_clasificacion - b.numero_clasificacion;
    });

    let copia2ArregloPaises = copiaArregloPaises.map(pais => pais);

    console.log("***Arreglos ascendente****")
    console.log(copiArregloValores);
    console.log(copiaArregloPaises);

    console.log("***Arreglos descendente****")
    copiArregloValores.reverse();
    copia2ArregloPaises.reverse();
    console.log(copiArregloValores);
    console.log(copia2ArregloPaises);

}

let filtrarDistancia = (e) => {
    let distanciaABuscar = prompt("Digite la distacia a filtrar");

    let arregloFiltradoDistancia = arregloDistancia.filter(
        (distancia) => distancia >= distanciaABuscar
    );

    if (arregloFiltradoDistancia == undefined)
        alert("No existe el pais");
    else
        alert("Informacion del filtro",arregloFiltradoDistancia);
        console.log(arregloFiltradoDistancia)

}

let buscarPais = (e) => {
    let nombrePaisesABuscar = prompt("Digite el nombre del pais a buscar");
    console.log(nombrePaisesABuscar);
    let r = arregloNombrePaises.find((nombre) => nombrePaisesABuscar.toLowerCase() == nombre.toLowerCase());
    console.log(r)

    if (r == undefined)
        alert("No existe el pais");
    else
        alert("El pais si existe");
}

document.querySelector("#btn_enviar_evaluacion").addEventListener("click", enviarEvaluacion);
document.querySelector("#btn_ordenar_valores").addEventListener("click", ordernarValores);
document.querySelector("#btn_filtar_distancia").addEventListener("click", filtrarDistancia);
document.querySelector("#btn_buscar_pais").addEventListener("click", buscarPais);