// console.log("hola mundo:Bienvenidos  a javaScript");
// var texto;
// texto=prompt("Ingresar texto");
// result=Math.sqrt(texto);
// document.log(texto);
// console.log(texto);
// alert(texto);


// var n,m;

var n=prompt("numero1: ");
var m=prompt("numero2: ");
var op=prompt("opcion 1-4");

// if(n>m)
// {
// mostrar(n);
// }
// else
// {
//     mostrar(m);
// }

switch(op){
    case '1': resultado=mostrar(suma());break;
    case '2': resultado=mostrar(resta());break;
    case '3': resultado=mostrar(multi());break;
    case '4': resultado=mostrar(div());break;

}
function suma(){
    var resultado=n+m;
    return resultado;
}
function resta(){
    var resultado=n-m;
    return resultado;
}
function multi(){
    var resultado=n*m;
    return resultado;
}
function div(){
    var resultado=n/m;
    if(m==0){
        return "CAN'T CALCUALTE";
    }
    return resultado;
}

function mostrar(resultado){
    document.write(resultado);
    console.log(resultado);
    alert(resultado);
}

