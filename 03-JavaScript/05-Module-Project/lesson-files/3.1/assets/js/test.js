// Log to console
let p1Name = window.prompt("welcome to money exchange ")
let p1money = 100;
let p1sale = 10;
let p1out = -2;


let salername ="com";
let salermoney = 50;
let salersale = 12;

var exchange = function () {
    window.alert("You can buy anything");

    var x = window.prompt("would you like to BUY of Sale. Choose one");


    

    if (x === "buy" || x === "BUY") {
       p1money = p1money - salersale;
       console.log(
        p1Name + "buy"
       );

       if (p1money <=0) {
        window.alert(salername + " is poor");
       } else {
        window.alert(salername + "has" + salermoney + "money left.");
       }

       salermoney = salermoney - p1sale;
       console.log(salername + "buy"
       );

       if (salerm) {
        
       } else {
        
       }
       
       
    } else if {
        
    } else{

    }
};
sale();