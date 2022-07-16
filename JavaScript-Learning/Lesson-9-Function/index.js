// Creatting a function 

function square(){
    var num = 5;
    var result = num*num;
    document.write("Square = " + result);
}

function multiply(num1,num2){
    var result = num1*num2;
    document.write("<br>Multiplication = " + result+"<br>");
}
square();
multiply(20,6);


// -> IIFEs (Immediately Invokeable Function Expressions)
// -> Functions can be called in the same line it is created 

(function display(){
    document.write("Hello from IIFE");
})();

// IIFE with function Parameters 

(function add(num1,num2){
    document.write("<br>Addition from IIFE : " + (num1+num2));
})(20,5);