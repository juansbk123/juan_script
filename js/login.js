// var u=document.getElementById("us").value;
// var p=document.getElementById("pass").value;



function go(){

p=document.form.password.value;
u=document.form.email.value;

resultado1="correto!!";
resultado2="usuarios y contrasenia  no son correctos!!";

if(document.form.password.value==1 && document.form.email.value=='juan'){
    // alert(resultado1);
    document.form.submit();
    // document.getElementById("../index.html").submit();
    var contador=1;
}


    else{
        
    contador++
    alert(resultado2);
    console.log('Intento:${contador}');
    if(contador===3){
        document.getElementById('us').disabled=true;
        document.getElementById('pass').disabled=true;

    }
    

    }
}

