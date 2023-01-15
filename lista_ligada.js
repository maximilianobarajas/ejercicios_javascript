//Declaramos la clase nodo
class Nodo{
    constructor(elemento, siguiente){
        this.elemento=elemento;
        this.siguiente=siguiente;
    }
}
//Función para imprimir la lista
function imprimir(cabeza){
    let i=cabeza;
    while(i!=null){
        console.log(i.elemento)
        i=i.siguiente;
    }
}
//Función para insertar elmentos en la lista
function insertar(cabeza,elemento,posicion){
    aux1=cabeza
    for(let x=0;x<posicion;x++){
        aux1=aux1.siguiente;
    }
    aux2=aux1.siguiente;
    aux1.siguiente=new Nodo(elemento,aux2);
}
//Funcion para obtener el tamaño de la lista
function tamanio(lista){
    let tamanio=0;
    aux=lista;
    while(aux!=null){
        tamanio++;
        aux=aux.siguiente;
    }
    return tamanio;
}
//Funcion para eliminar un elemento de la lista dada su posición
function eliminar(cabeza,posicion){
    let x=0;
    aux1=cabeza;
    while(x<posicion-1){
     aux1=aux1.siguiente;
     x++;
    }
    aux2=aux1.siguiente;
    aux1.siguiente=aux2.siguiente;
}
//Creamos una lista nueva con el constructor
lista1=new Nodo(0,null);
//Llenamos la lista
for(let i=0;i<=10;i++){
insertar(lista1,i+1,i);
}
//Imprimimos la lista original
console.log("Imprimimos la lista original:");
imprimir(lista1);
//Eliminamos un elemento de la lista
console.log("El tamanio de la lista original es:", tamanio(lista1));
eliminar(lista1,5);
//Imprimimos la lista nuevamente
console.log("Imprimimos la lista una vez eliminado un elemento:")
imprimir(lista1);
console.log("El tamanio de la lista sin el elemento eliminado es:", tamanio(lista1));
