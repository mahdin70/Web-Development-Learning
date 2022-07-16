var num1 = 20;
console.log(typeof(num1));

s1 = toString(num1);
console.log(typeof(s1));

var num2 = 20.5;
num3 = parseFloat(num2);
console.log(typeof(num3));

// -> toFixed() method return the closest round value 
// -> If <0.5 then the floor value , else if >0.5 then the ceiling value

var number = 20.39863;
console.log(number.toFixed());

console.log(number.toFixed(2)); //I want 2 digits after the decimal point

console.log(number.toPrecision(3)); // How many digits I want to show in total

























