console.log("juan");

class salarys{
    constructor(name,year,salary){
    this.Name=name;
    this.Year=parseFloat(year);
    this.Salary=parseFloat(salary);    
    };

    alternatives(){
        if(this.Year<16){
            return "a.";
        }

         if(this.Year>=19 && this.Year<=50){
             return "b.";
         }

          if(this.Year>51 && this.Year<=60) {
             return "c.";


         }
         if(this.Year>60) {
             return "d.";


         }


     };

    adult(){
        if(this.Year>19 && this.Year<50){
            var fiveP=this.Salary+this.Salary*(5/100);
            return (fiveP);
        }

         if(this.Year>51 && this.Year<60) {
            var tenP=this.Salary+this.Salary*(10/100);
            return (tenP);

        }
        if(this.Year>60) {
            var fifteenP=this.Salary+this.Salary*(15/100);
            return (fifteenP);

        }


    };

};

function calcular(){
    var bonos=document.getElementById("bono");
    var alternative=document.getElementById("letra");

    // para referenciar un dato de entrada por interfaz con js se bebe elegir -> abc document
    var dato = new salarys(document.getElementById('name').value,document.getElementById('year').value,document.getElementById('salary').value);
    // if(document.getElementById("ye").value<16){    
        alternative.value=dato.alternatives();
         bonos.value=dato.adult();

    // }
    // else{
    //     BONO.value=datos.adult();
    // }

};