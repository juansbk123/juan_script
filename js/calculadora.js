
var nombre= document.getElementById("nombre").value;

var rest=document.getElementById("result");
function calcular(){
    var n=parseInt(document.getElementById("num1").value);
    var m=parseInt(document.getElementById("num2").value);
    var op=parseInt(document.getElementById("oper").value);
    document.getElementById("result").value="Result: ";


    switch(op){
        case 1: rest.value=suma();break;
        case 2: rest.value=resta();break;
        case 3: rest.value=multi();break;
        case 4: rest.value=div();break;
        default:break;
    }
    function suma(){
        return (n+m);
        // var resultado=n+m;
        // return resultado;
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
            if(m==0){return "can't calculate"}
        return resultado;
    }
    

}