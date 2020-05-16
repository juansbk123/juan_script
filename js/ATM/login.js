class login{
    constructor(password) {
        this.pass=parseInt(password);        
    }

    validate(){
        if(this.pass==940848133){
            location.href="../../views/view_ATM/menu_main.html";
        }

    }
}

function main(){
    var usser=new login(document.getElementById("password").value)

    =usser.validate();

}