class Factorial{
    constructor(n){
        this.numero=parseFloat(n);
        // para hacer operaciones simpre se usa el this.numero
    };

    operacion(){
        var f=1;
        var i=1;
        while(i<=this.numero)
        {   
            f=f*i;
            i=i+1;
        }
        return (f);
    };
};

function calcular() {
    var res=document.getElementById("factorial");
    var ingresar= new Factorial(document.getElementById('num').value);

    res.value=ingresar.operacion();

};